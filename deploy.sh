#!/bin/bash
# Deploy script for fansari100.github.io

cd /Users/farooqansari/fansari100.github.io

echo "🚀 Deploying portfolio to GitHub..."

# Add remote if not exists
git remote remove origin 2>/dev/null
git remote add origin https://github.com/fansari100/fansari100.github.io.git

# Ensure we're on main branch
git branch -M main

# Push to GitHub
git push -u origin main

echo ""
echo "✅ Done! Your site will be live at: https://fansari100.github.io"
echo ""
echo "📝 Note: It may take 1-2 minutes for GitHub Pages to deploy."



