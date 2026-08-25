Add-Type -AssemblyName System.Drawing

$map = @(
  @{ n = "hero-wedding";   w = 2400; h = 1500; src = "hero-wedding.src.jpg" },
  @{ n = "outdoor-01";     w = 1400; h = 1750; src = "outdoor-01.src.jpg" },
  @{ n = "outdoor-02";     w = 1800; h = 1200; src = "outdoor-02-alt4.src.jpg" },
  @{ n = "outdoor-03";     w = 2400; h = 1000; src = "outdoor-03.src.jpg" },
  @{ n = "outdoor-04";     w = 1400; h = 1750; src = "outdoor-04.src.jpg" },
  @{ n = "story-01";       w = 1400; h = 1750; src = "story-01.src.jpg" },
  @{ n = "story-02";       w = 1800; h = 1200; src = "story-02.src.jpg" },
  @{ n = "cinematic-01";   w = 2400; h = 1000; src = "cinematic-01.src.jpg" },
  @{ n = "cinematic-02";   w = 1400; h = 1750; src = "cinematic-02.src.jpg" },
  @{ n = "drone-01";       w = 2400; h = 1350; src = "drone-01.src.jpg" },
  @{ n = "prep-01";        w = 1400; h = 1750; src = "prep-01.src.jpg" },
  @{ n = "prep-02";        w = 1800; h = 1200; src = "prep-02.src.jpg" },
  @{ n = "convoy-01";      w = 1800; h = 1200; src = "convoy-01.src.jpg" },
  @{ n = "scene-hazirlik"; w = 1600; h = 2000; src = "scene-hazirlik.src.jpg" },
  @{ n = "scene-bulusma";  w = 1600; h = 2000; src = "scene-bulusma.src.jpg" },
  @{ n = "scene-toren";    w = 1600; h = 2000; src = "scene-kutlama.src.jpg" },
  @{ n = "scene-kutlama";  w = 1600; h = 2000; src = "kutlama-check.jpg" },
  @{ n = "scene-sonkare";  w = 1600; h = 2000; src = "scene-sonkare.src.jpg" }
)

$rawDir = Join-Path $PSScriptRoot "raw"
$outDir = Join-Path $PSScriptRoot "..\public\images"

foreach ($m in $map) {
  $srcPath = Join-Path $rawDir $m.src
  $outPath = Join-Path $outDir "$($m.n).jpg"

  $img = [System.Drawing.Image]::FromFile($srcPath)
  $targetRatio = $m.w / $m.h
  $srcRatio = $img.Width / $img.Height

  if ($srcRatio -gt $targetRatio) {
    $cropH = $img.Height
    $cropW = [int]([double]$img.Height * $targetRatio)
  } else {
    $cropW = $img.Width
    $cropH = [int]([double]$img.Width / $targetRatio)
  }
  $cropX = [int](($img.Width - $cropW) / 2)
  $cropY = [int](($img.Height - $cropH) / 2)

  $bmp = New-Object System.Drawing.Bitmap($m.w, $m.h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  $srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
  $destRect = New-Object System.Drawing.Rectangle(0, 0, $m.w, $m.h)
  $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  $img.Dispose()

  $jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $eps = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $eps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]86)
  $bmp.Save($outPath, $jpgCodec, $eps)
  $bmp.Dispose()

  Write-Output "OK  $($m.n).jpg  <-  $($m.src)"
}
