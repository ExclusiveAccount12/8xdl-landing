#!/bin/bash

# 8XDL Landing Page - Deployment Package Creator
# This script creates a ready-to-upload ZIP file for cPanel

echo "Creating 8XDL deployment package..."
echo ""

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "Error: dist folder not found."
    echo "Please run 'npm run build' first."
    exit 1
fi

PACKAGE_NAME="8xdl.in-cpanel-ready.zip"

# Navigate to dist folder
cd dist

# Create ZIP file
echo "Creating ZIP archive..."
zip -rq "../${PACKAGE_NAME}" * .htaccess

# Go back to root
cd ..

# Check if ZIP was created successfully
if [ -f "${PACKAGE_NAME}" ]; then
    FILE_SIZE=$(du -h "${PACKAGE_NAME}" | cut -f1)
    echo ""
    echo "Deployment package created successfully."
    echo ""
    echo "Package: ${PACKAGE_NAME}"
    echo "Size: ${FILE_SIZE}"
    echo ""
    echo "Next steps:"
    echo "1. Login to your cPanel"
    echo "2. Go to File Manager"
    echo "3. Navigate to public_html"
    echo "4. Upload ${PACKAGE_NAME}"
    echo "5. Extract the ZIP file"
    echo "6. Delete the ZIP file"
    echo "7. Visit your domain!"
    echo ""
    echo "For detailed instructions, see: CPANEL_DEPLOYMENT_GUIDE.md"
else
    echo "Error: Failed to create deployment package"
    exit 1
fi
