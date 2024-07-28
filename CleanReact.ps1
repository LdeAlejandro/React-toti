$extensions = "favicon.ico", "logo192.png", "logo512.png", "robots.txt", "App.css", "logo.svg", "reportWebVitals.js", "index.css"


foreach ($ext in $extensions) { Get-ChildItem -Path . -Recurse -File -Filter $ext | Remove-Item } 

$htmlContent = @'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
'@

Set-Content -Path "public\index.html" -Value $htmlContent

$appContent = @'


function App() {
  return (
    <div >
      
    </div>
  );
}

export default App;
'@


Set-Content -Path "src\App.js" -Value $appContent

$indexContentJS = @'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

'@

Set-Content -Path "src\index.js" -Value $indexContentJS




