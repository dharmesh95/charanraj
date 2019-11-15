@echo off

git add .
set /p commit_message="Enter commit message: "
git commit -m "Auto Committed with message: %commit_message%"
git push

pause