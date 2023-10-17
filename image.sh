#!/bin/bash

imageDirectory="./public/images"

outputFile="./src/constants/images.ts"

extensionToRemove=".DS_Store"

find "$imageDirectory" -type f -name "*$extensionToRemove" -exec rm {} \;

# Remove the images.ts file if it exists
if [ -f "$outputFile" ]; then
  rm "$outputFile"
fi

# Create an array to store paths to all image files in the directory
imagePaths=()
imageNames=()

# Use find to locate all image files in the directory and add the paths to the array
while IFS= read -r -d $'\0' file; do
  imagePaths+=("$file")
done < <(find "$imageDirectory" -type f -print0)

# Create the images.ts file and write js code
echo "export const imagesList = [" >> "$outputFile"

for imagePath in "${imagePaths[@]}"; do
  #
  imagePath="${imagePath#./public/}"
  echo "  '/$imagePath'," >> "$outputFile"
done

echo "];" >> "$outputFile"

echo "export const imageListName = [" >> "$outputFile"

for imagePath in "${imagePaths[@]}"; do
  #
  imagePath="${imagePath#./public/}"
  echo "  '/$imagePath'," >> "$outputFile"
done

echo "];" >> "$outputFile"

echo "Images list has been generated and saved to $outputFile"

# Generate version

outputFileContants="./src/constants/load-image-data-version.ts"

# Remove the loadimage-data-version.ts file if it exists
if [ -f "$outputFileContants" ]; then
  rm "$outputFileContants"
fi

random_string=$(openssl rand -base64 10 | tr -d '+/=')

echo "export const VERSION = '$random_string';" >> "$outputFileContants"

echo "Constant version saved to $outputFileContants"