$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$indexPath = Join-Path $root "index.html"
$pagesPath = Join-Path $root "pages"

$pageFiles = @(
  "home.html",
  "leak-repair.html",
  "waterjet.html",
  "high-pressure.html",
  "large-vehicle-cleaning.html",
  "construction-vehicle-cleaning.html",
  "oil-cleaning.html",
  "water-tank-cleaning.html",
  "fish-pond-cleaning.html",
  "enterprise-food.html",
  "process.html",
  "area.html",
  "faq.html",
  "contact.html"
)

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$index = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)

$startMatch = [regex]::Match($index, "(?m)^  <main>\s*$")
$endMatch = [regex]::Match($index, "(?m)^  </main>\s*$")

if (-not $startMatch.Success) {
  throw "Cannot find opening <main> in index.html"
}

if (-not $endMatch.Success) {
  throw "Cannot find closing </main> in index.html"
}

if ($endMatch.Index -le $startMatch.Index) {
  throw "Invalid <main> block in index.html"
}

$pageContent = foreach ($file in $pageFiles) {
  $path = Join-Path $pagesPath $file
  if (-not (Test-Path $path)) {
    throw "Missing page file: pages/$file"
  }

  [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8).Trim()
}

$mainContent = "  <main>`r`n" + (($pageContent -join "`r`n`r`n") -replace "(?m)^", "    ") + "`r`n  </main>"
$rebuilt = $index.Substring(0, $startMatch.Index) + $mainContent + $index.Substring($endMatch.Index + $endMatch.Length)

[System.IO.File]::WriteAllText($indexPath, $rebuilt, $utf8NoBom)
Write-Host "index.html rebuilt from pages/*.html without changing the head SEO block."
