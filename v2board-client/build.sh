#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "=== v2Board Client Build Script ==="

# Step 1: Build frontend
echo "[1/4] Building frontend..."
cd frontend
npm run build
cd ..

# Step 2: Download mihomo binary
echo "[2/4] Downloading mihomo binary..."
MIHOMO_VERSION="v1.19.27"

download_mihomo() {
  local platform=$1
  local arch=$2
  local filename=$3
  local output=$4
  
  echo "  Downloading mihomo-${platform}-${arch}..."
  local url="https://github.com/MetaCubeX/mihomo/releases/download/${MIHOMO_VERSION}/${filename}"
  local dest="libs/${platform}/${output}.gz"
  
  mkdir -p "libs/${platform}"
  curl -L -o "${dest}" "${url}" 2>/dev/null || {
    echo "  Warning: Failed to download ${filename}, skipping"
    return 1
  }
  
  echo "  ✓ ${dest}"
}

# Darwin ARM64 (Apple Silicon Mac)
download_mihomo "darwin-arm64" "arm64" "mihomo-darwin-arm64-${MIHOMO_VERSION}.gz" "mihomo-darwin-arm64"

# Darwin x64 (Intel Mac)
download_mihomo "darwin-x64" "amd64" "mihomo-darwin-amd64-${MIHOMO_VERSION}.gz" "mihomo-darwin-amd64"

# Windows x64
download_mihomo "win32-x64" "amd64" "mihomo-windows-amd64-${MIHOMO_VERSION}.gz" "mihomo-windows-amd64.exe"

# Decompress gz files
for gz in libs/*/mihomo-*.gz; do
  if [ -f "$gz" ]; then
    gunzip -f "$gz" 2>/dev/null || true
  fi
done
find libs/darwin-arm64 libs/darwin-x64 -type f -name 'mihomo-*' -exec chmod +x {} \; 2>/dev/null || true

# Step 3: Copy geo databases
echo "[3/4] Setting up geo databases..."
mkdir -p libs/geo
# Geo databases will be downloaded on first run if not present

# Step 4: Build Electron app
echo "[4/4] Building Electron app..."
TARGET="${TARGET:-darwin}"
npx electron-builder build --${TARGET} --${ARCH:-arm64}

echo ""
echo "=== Build Complete ==="
echo "Output directory: dist-electron/"
