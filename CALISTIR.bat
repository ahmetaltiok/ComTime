@echo off
chcp 65001 >nul
title ComTime

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js bulunamadi. https://nodejs.org adresinden kurun.
    pause
    exit /b
)

if not exist "node_modules" (
    echo Bagimliliklar kuruluyor...
    call npm install --no-audit --no-fund 2>nul
)

echo ComTime baslatiliyor...
call npx electron .
