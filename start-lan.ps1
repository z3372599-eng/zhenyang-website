$ErrorActionPreference = 'Stop'

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeDir = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin'
$binDir = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin'
$pnpm = Join-Path $binDir 'pnpm.cmd'
$port = 3000

$env:Path = "$nodeDir;$binDir;$env:Path"
Set-Location $projectDir

$ip = Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object {
    $_.IPAddress -like '192.168.*' -and
    $_.PrefixOrigin -ne 'WellKnown'
  } |
  Select-Object -First 1 -ExpandProperty IPAddress

if (-not $ip) {
  $ip = 'YOUR-COMPUTER-IP'
}

Write-Host ''
Write-Host 'Hebei Zhenyang website LAN server' -ForegroundColor Cyan
Write-Host 'Project:' $projectDir
Write-Host ''
Write-Host 'If other devices are on the same Wi-Fi, open:' -ForegroundColor Green
Write-Host "http://$ip`:$port" -ForegroundColor Yellow
Write-Host ''
Write-Host 'Keep this window open while viewing the website.' -ForegroundColor Gray
Write-Host 'Press Ctrl+C to stop the website server.' -ForegroundColor Gray
Write-Host ''

& $pnpm dev -H 0.0.0.0 -p $port
