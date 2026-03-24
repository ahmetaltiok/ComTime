@echo off
chcp 65001 >nul
title ComTime Kurulum

echo.
echo  ╔═══════════════════════════════════════════╗
echo  ║    ComTime - Windows Kurulumu Hazirlama   ║
echo  ╚═══════════════════════════════════════════╝
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  [!] Node.js bulunamadi!
    echo  [!] https://nodejs.org adresinden LTS surumunu indirip kurun.
    start https://nodejs.org
    pause
    exit /b
)

echo  [1/3] Bagimliliklar kuruluyor...
call npm install --no-audit --no-fund 2>nul
echo.
echo  [2/3] ComTime-Setup.exe olusturuluyor...
echo         (Bu islem 2-5 dakika surebilir, lutfen bekleyin)
echo.
call npx electron-builder --win nsis 2>nul

if exist "dist\ComTime-Setup-1.0.0.exe" (
    echo.
    echo  [3/3] BASARILI!
    echo.
    echo  ══════════════════════════════════════════════
    echo   dist\ComTime-Setup-1.0.0.exe dosyasi hazir!
    echo   Cift tiklayarak bilgisayariniza kurabilirsiniz.
    echo  ══════════════════════════════════════════════
    explorer dist
) else (
    echo.
    echo  [!] Setup olusturulamadi. Ama portable surumu deneyin:
    echo  [!] CALISTIR.bat dosyasini kullanin.
)
echo.
pause
