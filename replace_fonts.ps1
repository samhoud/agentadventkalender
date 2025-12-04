$styleContent = Get-Content 'style.css' -Raw
$styleContent = $styleContent.Replace("'Mountains of Christmas', cursive", "'Montserrat', sans-serif")
Set-Content 'style.css' -Value $styleContent -NoNewline

$sleighContent = Get-Content 'sleigh.css' -Raw
$sleighContent = $sleighContent.Replace("'Mountains of Christmas', cursive", "'Montserrat', sans-serif")
Set-Content 'sleigh.css' -Value $sleighContent -NoNewline

Write-Host "Font replacement complete!"
