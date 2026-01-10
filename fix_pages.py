#!/usr/bin/env python3
"""Fix Next.js pages by removing duplicate imports and cleaning up."""

import os
import re

PAGES = [
    "src/app/about/page.tsx",
    "src/app/portfolio/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/services/page.tsx",
    "src/app/services/lake-house-painting/page.tsx",
    "src/app/services/deck-refinishing/page.tsx",
    "src/app/services/exterior-painting/page.tsx",
    "src/app/services/interior-painting/page.tsx",
    "src/app/warranty/page.tsx",
]

def fix_page(filepath):
    """Fix a single page by removing duplicate imports."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Track what we've seen
    seen_imports = set()
    lines = content.split('\n')
    new_lines = []
    
    for line in lines:
        # Check if this is an import line
        import_match = re.match(r"import .* from ['\"].*['\"];?", line)
        if import_match:
            # Normalize the import for comparison
            normalized = line.strip().rstrip(';')
            if normalized in seen_imports:
                continue  # Skip duplicate
            seen_imports.add(normalized)
        new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    # Fix path imports - convert relative to absolute
    content = re.sub(r"from ['\"]\.\.\/components\/", "from '@/components/", content)
    content = re.sub(r"from ['\"]\.\.\/\.\.\/components\/", "from '@/components/", content)
    content = re.sub(r"from ['\"]\.\.\/context\/", "from '@/context/", content)
    content = re.sub(r"from ['\"]\.\.\/\.\.\/context\/", "from '@/context/", content)
    
    # Remove any remaining Helmet imports/usage
    content = re.sub(r"import \{ Helmet \} from 'react-helmet-async';\n?", "", content)
    content = re.sub(r"<Helmet>[\s\S]*?</Helmet>\s*", "", content)
    
    # Remove wouter Link import (we use next/link)
    content = re.sub(r"import \{ Link \} from 'wouter';\n?", "", content)
    
    # Convert Link to= to href=
    content = content.replace('<Link to="', '<Link href="')
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Fixed: {filepath}")

def main():
    os.chdir("/home/ubuntu/farrell-nextjs")
    
    for filepath in PAGES:
        if os.path.exists(filepath):
            fix_page(filepath)
        else:
            print(f"File not found: {filepath}")

if __name__ == "__main__":
    main()
