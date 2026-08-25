Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "..\public\images"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

# name, width, height, label, category
$assets = @(
  @{n="hero-wedding";     w=2400; h=1500; label="HERO - GUN BATIMI"; cat="STUDIO KERIM ISIK"},
  @{n="outdoor-01";       w=1400; h=1750; label="DIS CEKIM"; cat="KARAMURSEL SAHILI"},
  @{n="outdoor-02";       w=1800; h=1200; label="DIS CEKIM"; cat="DOGAL ISIK"},
  @{n="outdoor-03";       w=2400; h=1000; label="DIS CEKIM"; cat="GENIS KARE"},
  @{n="outdoor-04";       w=1400; h=1750; label="DIS CEKIM"; cat="PORTRE"},
  @{n="story-01";         w=1400; h=1750; label="DUGUN HIKAYESI"; cat="TOREN"},
  @{n="story-02";         w=1800; h=1200; label="DUGUN HIKAYESI"; cat="KUTLAMA"},
  @{n="cinematic-01";     w=2400; h=1000; label="SINEMATIK"; cat="HAREKET HALINDE"},
  @{n="cinematic-02";     w=1400; h=1750; label="SINEMATIK"; cat="BAKIS"},
  @{n="drone-01";         w=2400; h=1350; label="DRONE CEKIMI"; cat="KUS BAKISI"},
  @{n="prep-01";          w=1400; h=1750; label="HAZIRLIK"; cat="KUAFOR"},
  @{n="prep-02";          w=1800; h=1200; label="HAZIRLIK"; cat="AILE"},
  @{n="convoy-01";        w=1800; h=1200; label="KONVOY CEKIMI"; cat="SEHIRDE"},
  @{n="scene-hazirlik";   w=1600; h=2000; label="SAHNE 01"; cat="HAZIRLIK"},
  @{n="scene-bulusma";    w=1600; h=2000; label="SAHNE 02"; cat="BULUSMA"},
  @{n="scene-toren";      w=1600; h=2000; label="SAHNE 03"; cat="TOREN"},
  @{n="scene-kutlama";    w=1600; h=2000; label="SAHNE 04"; cat="KUTLAMA"},
  @{n="scene-sonkare";    w=1600; h=2000; label="SAHNE 05"; cat="SON KARE"}
)

function New-Placeholder {
  param($w, $h, $label, $cat, $path, $seed)

  $bmp = New-Object System.Drawing.Bitmap($w, $h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $rnd = New-Object System.Random($seed)

  # base diagonal charcoal gradient, varied slightly per image via seed
  $c1 = [System.Drawing.Color]::FromArgb(255, 20 + $rnd.Next(0,10), 19 + $rnd.Next(0,8), 18 + $rnd.Next(0,8))
  $c2 = [System.Drawing.Color]::FromArgb(255, 10, 9, 9)
  $rect = New-Object System.Drawing.Rectangle(0,0,$w,$h)
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c1, $c2, 55)
  $g.FillRectangle($brush, $rect)

  # subtle gold light leak from one corner
  $goldPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $lx = if ($rnd.Next(0,2) -eq 0) { 0 } else { $w }
  $goldBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point($lx, 0)),
    (New-Object System.Drawing.Point(($lx + ($(if($lx -eq 0){1} else {-1}) * [int]($w*0.6))), $h)),
    [System.Drawing.Color]::FromArgb(70, 180, 149, 99),
    [System.Drawing.Color]::FromArgb(0, 180, 149, 99)
  )
  $g.FillRectangle($goldBrush, $rect)

  # fine grain noise
  for ($i = 0; $i -lt ($w*$h/2600); $i++) {
    $x = $rnd.Next(0, $w)
    $y = $rnd.Next(0, $h)
    $a = $rnd.Next(4, 14)
    $tone = $rnd.Next(0,2)
    $col = if ($tone -eq 0) { [System.Drawing.Color]::FromArgb($a, 245, 240, 232) } else { [System.Drawing.Color]::FromArgb($a, 0,0,0) }
    $b = New-Object System.Drawing.SolidBrush($col)
    $g.FillRectangle($b, $x, $y, 1.6, 1.6)
    $b.Dispose()
  }

  # thin inset film frame border
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(90, 216, 208, 195), 1.5)
  $inset = [int]($w * 0.018)
  $g.DrawRectangle($pen, $inset, $inset, $w - 2*$inset, $h - 2*$inset)

  # corner ticks (slate marks)
  $tickLen = [int]($w * 0.02)
  $tickPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(140, 180, 149, 99), 2)
  $g.DrawLine($tickPen, $inset, $inset + $tickLen, $inset, $inset)
  $g.DrawLine($tickPen, $inset, $inset, $inset + $tickLen, $inset)
  $g.DrawLine($tickPen, $w-$inset, $h-$inset-$tickLen, $w-$inset, $h-$inset)
  $g.DrawLine($tickPen, $w-$inset, $h-$inset, $w-$inset-$tickLen, $h-$inset)

  # label text bottom-left, small tracked caps
  $fontSize = [Math]::Max(14, [int]($w * 0.016))
  $font = New-Object System.Drawing.Font("Georgia", $fontSize, [System.Drawing.FontStyle]::Regular)
  $catFont = New-Object System.Drawing.Font("Georgia", [int]($fontSize*0.62), [System.Drawing.FontStyle]::Italic)
  $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(200, 245, 240, 232))
  $goldTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 180, 149, 99))

  $tx = $inset + [int]($w*0.03)
  $ty = $h - $inset - [int]($w*0.075)

  # tracked label (manual letter spacing)
  $trackedLabel = ($label.ToCharArray() -join [char]0x2009+[char]0x2009)
  $g.DrawString($trackedLabel, $font, $goldTextBrush, $tx, $ty)
  $g.DrawString($cat, $catFont, $textBrush, $tx, $ty + $fontSize + 6)

  # placeholder notice, tiny, top-right
  $noteFont = New-Object System.Drawing.Font("Arial", [int]($fontSize*0.5), [System.Drawing.FontStyle]::Regular)
  $noteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(90, 216, 208, 195))
  $noteText = "GECICI GORSEL"
  $noteSize = $g.MeasureString($noteText, $noteFont)
  $g.DrawString($noteText, $noteFont, $noteBrush, $w - $inset - $noteSize.Width - 6, $inset + 6)

  $g.Dispose()

  $jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $eps = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $eps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]82)
  $bmp.Save($path, $jpgCodec, $eps)
  $bmp.Dispose()
}

$seed = 1
foreach ($a in $assets) {
  $path = Join-Path $outDir ($a.n + ".jpg")
  New-Placeholder -w $a.w -h $a.h -label $a.label -cat $a.cat -path $path -seed $seed
  Write-Output "generated $path"
  $seed++
}
