#!/bin/bash

# Function to convert a page
convert_page() {
    local file=$1
    local title=$2
    local description=$3
    local canonical=$4
    
    # Remove old imports
    sed -i "/import { Helmet } from 'react-helmet-async';/d" "$file"
    sed -i "/import { Link } from 'wouter';/d" "$file"
    sed -i "/import Header from '..\/components\/Header';/d" "$file"
    sed -i "/import Footer from '..\/components\/Footer';/d" "$file"
    sed -i "/import Header from '..\/..\/components\/Header';/d" "$file"
    sed -i "/import Footer from '..\/..\/components\/Footer';/d" "$file"
    sed -i "/import SEO from/d" "$file"
    
    # Remove Helmet blocks
    sed -i '/<Helmet>/,/<\/Helmet>/d' "$file"
    
    # Convert Link components
    sed -i 's/<Link to="/<Link href="/g' "$file"
    
    # Add QuoteFormModal before closing tag
    sed -i 's/<\/Footer>/<\/Footer>\n      <QuoteFormModal \/>/g' "$file"
}

# Convert each page
for file in src/app/*/page.tsx src/app/*/*/page.tsx; do
    if [ -f "$file" ]; then
        convert_page "$file"
        echo "Converted: $file"
    fi
done
