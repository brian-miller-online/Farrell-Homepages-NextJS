#!/usr/bin/env python3
"""Convert Vite+React pages to Next.js App Router format - properly."""

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

def convert_page(filepath):
    """Convert a single page to Next.js format."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Collect all imports and other content separately
    lines = content.split('\n')
    imports = []
    other_lines = []
    
    # Track imports we need
    needs_link = False
    needs_header = False
    needs_footer = False
    needs_quote_modal = False
    
    for line in lines:
        stripped = line.strip()
        
        # Skip Helmet import
        if 'react-helmet-async' in line:
            continue
        
        # Skip wouter Link import (we'll add next/link)
        if "from 'wouter'" in line or 'from "wouter"' in line:
            needs_link = True
            continue
        
        # Check for Header/Footer imports and skip them (we'll add standardized ones)
        if re.match(r"import Header from", stripped):
            needs_header = True
            continue
        if re.match(r"import Footer from", stripped):
            needs_footer = True
            continue
        
        # Check if it's an import line
        if stripped.startswith('import '):
            # Fix relative paths to absolute
            line = re.sub(r'from ["\']\.\.\/components\/', 'from "@/components/', line)
            line = re.sub(r'from ["\']\.\.\/\.\.\/components\/', 'from "@/components/', line)
            line = re.sub(r'from ["\']\.\.\/context\/', 'from "@/context/', line)
            line = re.sub(r'from ["\']\.\.\/\.\.\/context\/', 'from "@/context/', line)
            imports.append(line)
        else:
            other_lines.append(line)
    
    # Remove Helmet JSX blocks from other_lines
    content_without_imports = '\n'.join(other_lines)
    content_without_imports = re.sub(r'<Helmet>[\s\S]*?</Helmet>\s*', '', content_without_imports)
    
    # Convert Link to= to href=
    content_without_imports = content_without_imports.replace('<Link to="', '<Link href="')
    content_without_imports = content_without_imports.replace("<Link to='", "<Link href='")
    
    # Build the final file
    final_lines = []
    
    # Add 'use client' directive
    final_lines.append('"use client";')
    final_lines.append('')
    
    # Add standardized imports first
    if needs_link or '<Link' in content_without_imports:
        final_lines.append("import Link from 'next/link';")
    final_lines.append("import Header from '@/components/Header';")
    final_lines.append("import Footer from '@/components/Footer';")
    final_lines.append("import QuoteFormModal from '@/components/QuoteFormModal';")
    
    # Add other imports
    for imp in imports:
        final_lines.append(imp)
    
    # Add rest of the content
    final_lines.append('')
    final_lines.append(content_without_imports.strip())
    
    # Add QuoteFormModal if not present
    final_content = '\n'.join(final_lines)
    if '<QuoteFormModal' not in final_content:
        # Add before the last closing tag of the component
        final_content = re.sub(
            r'(\s*</Footer>\s*)(</)',
            r'\1      <QuoteFormModal />\n    \2',
            final_content
        )
    
    with open(filepath, 'w') as f:
        f.write(final_content)
    
    print(f"Converted: {filepath}")

def main():
    os.chdir("/home/ubuntu/farrell-nextjs")
    
    for filepath in PAGES:
        if os.path.exists(filepath):
            convert_page(filepath)
        else:
            print(f"File not found: {filepath}")

if __name__ == "__main__":
    main()
