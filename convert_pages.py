#!/usr/bin/env python3
"""Convert Vite+React pages to Next.js App Router format."""

import os
import re

# Page configurations with metadata
PAGES = {
    "src/app/about/page.tsx": {
        "title": "About Joe Farrell",
        "description": "Meet Joe Farrell, owner of Farrell's Painting. 20+ years of experience serving Fort Wayne and Northeast Indiana with quality painting services.",
        "canonical": "https://www.farrellspainting.com/about",
        "use_client": True,
    },
    "src/app/portfolio/page.tsx": {
        "title": "Our Work - Portfolio",
        "description": "See examples of our painting work across Fort Wayne and Northeast Indiana. Before and after photos of exterior painting, interior painting, and deck refinishing projects.",
        "canonical": "https://www.farrellspainting.com/portfolio",
        "use_client": True,
    },
    "src/app/contact/page.tsx": {
        "title": "Contact Us",
        "description": "Get a free painting quote from Farrell's Painting. Call (260) 909-0717 or fill out our contact form. Serving Fort Wayne and Northeast Indiana.",
        "canonical": "https://www.farrellspainting.com/contact",
        "use_client": True,
    },
    "src/app/services/page.tsx": {
        "title": "Our Painting Services",
        "description": "Professional painting services in Fort Wayne and Northeast Indiana. Exterior painting, interior painting, deck staining, and lake house specialists.",
        "canonical": "https://www.farrellspainting.com/services",
        "use_client": True,
    },
    "src/app/services/lake-house-painting/page.tsx": {
        "title": "Lake House Painting Specialists",
        "description": "Expert lake house painting for Hamilton Lake, Lake James, and Northeast Indiana. We understand the unique challenges of lakefront properties.",
        "canonical": "https://www.farrellspainting.com/services/lake-house-painting",
        "use_client": True,
    },
    "src/app/services/deck-refinishing/page.tsx": {
        "title": "Deck Refinishing & Staining",
        "description": "Professional deck refinishing and staining services in Fort Wayne and Northeast Indiana. Restore your deck's beauty with quality stains and sealers.",
        "canonical": "https://www.farrellspainting.com/services/deck-refinishing",
        "use_client": True,
    },
    "src/app/services/exterior-painting/page.tsx": {
        "title": "Exterior House Painting",
        "description": "Professional exterior house painting in Fort Wayne and Northeast Indiana. Premium Sherwin-Williams paints with a 5-year workmanship warranty.",
        "canonical": "https://www.farrellspainting.com/services/exterior-painting",
        "use_client": True,
    },
    "src/app/services/interior-painting/page.tsx": {
        "title": "Interior House Painting",
        "description": "Clean, precise interior painting services in Fort Wayne and Northeast Indiana. Expert color consultation and meticulous attention to detail.",
        "canonical": "https://www.farrellspainting.com/services/interior-painting",
        "use_client": True,
    },
    "src/app/warranty/page.tsx": {
        "title": "5-Year Workmanship Warranty",
        "description": "Most painting contractors in Northeast Indiana offer 2-3 year warranties. We offer 5. Learn about our industry-leading 5-year workmanship warranty.",
        "canonical": "https://www.farrellspainting.com/warranty",
        "use_client": False,
    },
}

def convert_page(filepath, config):
    """Convert a single page to Next.js format."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Remove old imports
    content = re.sub(r"import \{ Helmet \} from 'react-helmet-async';\n?", "", content)
    content = re.sub(r"import \{ Link \} from 'wouter';\n?", "", content)
    content = re.sub(r"import Header from ['\"]\.\.\/components\/Header['\"];\n?", "", content)
    content = re.sub(r"import Footer from ['\"]\.\.\/components\/Footer['\"];\n?", "", content)
    content = re.sub(r"import Header from ['\"]\.\.\/\.\.\/components\/Header['\"];\n?", "", content)
    content = re.sub(r"import Footer from ['\"]\.\.\/\.\.\/components\/Footer['\"];\n?", "", content)
    content = re.sub(r"import SEO from ['\"]@\/components\/SEO['\"];\n?", "", content)
    
    # Remove Helmet blocks
    content = re.sub(r"<Helmet>[\s\S]*?</Helmet>\s*", "", content)
    
    # Convert Link components
    content = content.replace('<Link to="', '<Link href="')
    
    # Build new imports
    new_imports = []
    if config.get("use_client"):
        new_imports.append('"use client";')
        new_imports.append("")
    
    new_imports.append("import Link from 'next/link';")
    new_imports.append("import Header from '@/components/Header';")
    new_imports.append("import Footer from '@/components/Footer';")
    new_imports.append("import QuoteFormModal from '@/components/QuoteFormModal';")
    
    # Add the new imports at the top
    content = "\n".join(new_imports) + "\n" + content
    
    # Add QuoteFormModal before closing tag if not already present
    if "<QuoteFormModal />" not in content:
        content = content.replace("</Footer>", "</Footer>\n      <QuoteFormModal />")
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Converted: {filepath}")

def main():
    os.chdir("/home/ubuntu/farrell-nextjs")
    
    for filepath, config in PAGES.items():
        if os.path.exists(filepath):
            convert_page(filepath, config)
        else:
            print(f"File not found: {filepath}")

if __name__ == "__main__":
    main()
