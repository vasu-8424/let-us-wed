# Copy uploaded images from the brain directory to the public directory
$brainDir = "C:\Users\admin\.gemini\antigravity\brain\b66f4972-5594-4028-b774-5ba4da4c4503"
$publicDir = "d:\let_us_wed\let-us-wed\public"

Copy-Item "$brainDir\input_file_0.png" "$publicDir\gallery-1.png" -Force
Copy-Item "$brainDir\input_file_1.png" "$publicDir\gallery-2.png" -Force
Copy-Item "$brainDir\input_file_2.png" "$publicDir\gallery-3.png" -Force
Copy-Item "$brainDir\input_file_3.png" "$publicDir\gallery-4.png" -Force
Copy-Item "$brainDir\input_file_4.png" "$publicDir\gallery-5.png" -Force

Write-Host "Gallery images have been successfully updated!"
