del /s /q "./src/main/web/charanraj-app/build"
rmdir /s /q "./src/main/web/charanraj-app/build"
mkdir "./src/main/web/charanraj-app/build"
echo contents in web app build folder deleted

del /s /q "./src/main/resources/static"
rmdir /s /q "./src/main/resources/static"
mkdir "./src/main/resources/static"
echo contents in static folder deleted

start /separate /wait cmd /c "npm --prefix ""./src/main/web/charanraj-app"" run build" &
rem npm --prefix "./src/main/web/charanraj-app" run build
echo build created

SET src_folder=./src/main/web/charanraj-app/build
SET tar_folder=./src/main/resources/static
for /f %%a IN ('dir "%src_folder%" /b') do move %src_folder%\%%a %tar_folder%
echo moved all files in web app build moved to static folder

git add .
git commit -m "auto commited"
git push

pause