<#
Simple helper to start a local static server for this repo.
Usage: .\scripts\start-local-server.ps1 [-Port 8000]

Behavior:
- If Python 3 is available, uses: python -m http.server <port>
- Else if Node is available, tries: npx http-server -p <port>
- Else prints instructions (see DEVELOPMENT.md)
#>
param(
    [int]$Port = 8000
)

function Run-ProcessAndExit($cmd, $args) {
    Write-Host "Starting: $cmd $args" -ForegroundColor Green
    & $cmd $args
    exit $LASTEXITCODE
}

if (Get-Command python -ErrorAction SilentlyContinue) {
    Run-ProcessAndExit python "-m", "http.server", "$Port"
}

if (Get-Command npx -ErrorAction SilentlyContinue) {
    Run-ProcessAndExit npx "http-server", "-p", "$Port"
}

Write-Host "No supported runtime found (python or npx)." -ForegroundColor Yellow
Write-Host "Options: 1) Install Python 3  2) Install Node.js (npm includes npx)  3) Use VS Code Live Server extension" -ForegroundColor Cyan
Write-Host "See DEVELOPMENT.md for exact commands and troubleshooting." -ForegroundColor Cyan