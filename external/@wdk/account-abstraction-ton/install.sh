#!/bin/bash

set -e  
set -o pipefail  

rm -rf node_modules .turbo
yarn cache clean
yarn install --check-files
# yarn run turbo run build --force

echo "Building fundamental dependencies..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/tsup-config
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/typescript-config
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-config

echo "Building core libraries..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-core

echo "Building platform-specific UI packages..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-evm
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-solana
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-tron
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-ton
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-aptos

echo "Building wallet packages..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-wallet
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-wallet-evm
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-wallet-solana
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-wallet-ton
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-wallet-tron
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-wallet-aptos
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-wallet-cosmos

echo "Building bridge SDKs..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-bridge-sdk

echo "Building bridge packages..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-bridge-aptos
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-bridge-oft
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-bridge-oft-wrapper
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-bridge-onft
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-bridge-shrap
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-bridge-wab

echo "Building Stargate SDKs & related packages..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-stargate
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-stargate-client
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-stargate-v1-sdk
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-stargate-v2-sdk
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-stargate-usdv

echo "Building scan-client..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/scan-client

echo "Building utility libraries..."
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-superjson
yarn run turbo run build --force --output-logs=errors-only --filter=@layerzerolabs/ui-price-sdk

echo "Build process completed successfully!"