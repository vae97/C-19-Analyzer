const electron =require('electron');
const app =electron.app;

const BrowserWindow =electron.BrowserWindow;

var mainWindow;

app.on('ready', function (){
    mainWindow=new BrowserWindow({width:1024, height:769, backgroundColor:'white'});
    mainWindow.loadURL('https://sl-covid-app.supunhd96.vercel.app');


});
