# To get this going:
1. install cordova, ionic
2. ionic add platform browser
3. install http-server global (npm install -g http-server)
4. run 'bower install' and 'npm install'
5. run 'ionic build browser'
6. run 'http-server -S -p 8000 platforms/browser/www'
7. setup a cordova run config to run 'ionic prepare browser' (rebuilds the www directory)

Now you can go to *https://localhost:8000/* accept the risk of the self-signed cert and view the page.

Change the code and you must run step 7 again before you refresh the browser.  The facebook session seems to be lost on refresh so you have to navigate to root each time.