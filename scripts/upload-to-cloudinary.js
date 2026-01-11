const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dlnb17xz7',
  api_key: '443968784126773',
  api_secret: '4-cE2fjef4DmoVa4kx4byN3-8x8'
});

const publicDir = path.join(__dirname, '..', 'public');
const outputFile = path.join(__dirname, '..', 'src', 'lib', 'cloudinary-urls.json');

// Main folder in Cloudinary
const CLOUDINARY_FOLDER = "Farrell's Painting";

// Image extensions to upload
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// Folders to scan (relative to public/)
const foldersToScan = ['', 'portfolio', 'services', 'problems', 'assets'];

async function uploadImage(filePath, subfolder) {
  const fileName = path.basename(filePath, path.extname(filePath));
  // Clean filename for Cloudinary (remove special chars that might cause issues)
  const cleanFileName = fileName.replace(/['"]/g, '');
  
  // Build the folder path: "Farrell's Painting/subfolder" or just "Farrell's Painting"
  const cloudinaryPath = subfolder 
    ? `${CLOUDINARY_FOLDER}/${subfolder}` 
    : CLOUDINARY_FOLDER;
  
  try {
    console.log(`Uploading: ${path.basename(filePath)} -> ${cloudinaryPath}/`);
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: cleanFileName,
      folder: cloudinaryPath,
      overwrite: true,
      resource_type: 'image',
      // Enable automatic format and quality optimization
      transformation: [
        { quality: 'auto', fetch_format: 'auto' }
      ]
    });
    
    console.log(`  ✓ Uploaded: ${result.public_id}`);
    return {
      originalPath: filePath.replace(publicDir, '').replace(/\\/g, '/'),
      publicId: result.public_id,
      url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes
    };
  } catch (error) {
    console.error(`  ✗ Error uploading ${filePath}:`, error.message);
    return null;
  }
}

async function scanAndUpload() {
  const results = {};
  let totalUploaded = 0;
  
  for (const folder of foldersToScan) {
    const folderPath = folder ? path.join(publicDir, folder) : publicDir;
    
    if (!fs.existsSync(folderPath)) {
      console.log(`Folder not found: ${folderPath}`);
      continue;
    }
    
    const files = fs.readdirSync(folderPath);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!imageExtensions.includes(ext)) continue;
      
      const filePath = path.join(folderPath, file);
      const stat = fs.statSync(filePath);
      
      if (!stat.isFile()) continue;
      
      const result = await uploadImage(filePath, folder);
      if (result) {
        results[result.originalPath] = result;
        totalUploaded++;
      }
    }
  }
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Save results
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\n✓ Saved ${totalUploaded} image mappings to ${outputFile}`);
  
  // Calculate savings
  let totalOriginal = 0;
  let totalOptimized = 0;
  for (const img of Object.values(results)) {
    try {
      const originalSize = fs.statSync(path.join(publicDir, img.originalPath)).size;
      totalOriginal += originalSize;
      totalOptimized += img.bytes;
    } catch (e) {
      // Skip if file not found
    }
  }
  
  if (totalOriginal > 0) {
    console.log(`\nOriginal total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Cloudinary total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Savings: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  }
  
  console.log(`\nAll images uploaded to Cloudinary folder: "${CLOUDINARY_FOLDER}"`);
}

scanAndUpload().catch(console.error);
