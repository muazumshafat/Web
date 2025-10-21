#!/bin/bash

# Extract the site ZIP automatically
# Works on GitHub Codespaces, local terminals, or any Linux/macOS environment

ZIP_FILE="web-v5.zip"
TARGET_DIR="site"

echo "Starting extraction of $ZIP_FILE ..."

# Make sure unzip is installed
if ! command -v unzip &> /dev/null
then
    echo "unzip could not be found, installing..."
    sudo apt-get update && sudo apt-get install -y unzip
fi

# Remove any old directory if exists
rm -rf "$TARGET_DIR"

# Extract the zip file
unzip -o "$ZIP_FILE" -d "$TARGET_DIR"

# Move all files from site/ to root (optional)
mv "$TARGET_DIR"/* ./
rm -rf "$TARGET_DIR"

echo "✅ Extraction complete!"
echo "You can now open index.html in your browser."
