npx create-next-app@latest temp_proj --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
if (Test-Path temp_proj) {
    Copy-Item -Path temp_proj\* -Destination . -Recurse -Force
    Get-ChildItem -Path temp_proj -Hidden | ForEach-Object { Copy-Item -Path $_.FullName -Destination . -Recurse -Force }
    Remove-Item temp_proj -Recurse -Force
    Write-Host "Next.js setup completed and files moved."
} else {
    Write-Host "Temp project directory not found."
}
