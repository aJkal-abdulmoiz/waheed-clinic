@echo off

cd "C:\Users\Abdul Moiz\Desktop\Waleed Tahir Clinic"

start python -m http.server 5500

timeout /t 2

start http://127.0.0.1:5500/
