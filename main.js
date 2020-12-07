const electron =require('electron');
const app =electron.app;
const path =require('path');
const url =require('url')


const BrowserWindow =electron.BrowserWindow;

var mainWindow;

app.on('ready', function (){
    mainWindow=new BrowserWindow({width:1024, height:769, backgroundColor:'white'});
    //mainWindow.loadURL('https://sl-covid-app.supunhd96.vercel.app');
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'home.html'),
        protocol:'file',
        slashes:true
    }))

});