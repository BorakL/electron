const {app, BrowserWindow, Menu, clipboard} = require('electron');

let mainWindow
const menuTemplate = [
    {
        label: 'File',
        submenu:[
            {label: 'Open'},
            {label: 'Save'},
            {type: 'separator'},
            {label: 'Exit', role:'quit'}
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label:'About',
                click: ()=>{
                    console.log('Electron App versioin 1.0')
                }
            }
        ]
    },
    {
        label: 'Grupa1',
        submenu: [
            {
                label:'PodgrupaA',
                submenu: [
                    {
                        label: "A1",
                        click: ()=>{console.log("A1")}
                    },
                    {
                        label: "A2",
                        click: ()=>{console.log("A2")}
                    },
                    {
                        label: "A3",
                        click: ()=>{console.log("A3")}
                    }
                ]
            },
            {
                label:"PodgrupaB",
                submenu:[
                    {
                        label:"B1",
                        click: ()=>{console.log("B1")}
                    },
                    {
                        label:"B2",
                        click: ()=>{console.log("B2")}
                    }
                ]
            },
            {
                label:"PodgrupaC",
                submenu: [
                    {
                        label:"C1",
                        click: ()=>{console.log("C1")}
                    },
                    {
                        label:"C2",
                        click: ()=>{console.log("C2")}
                    },
                    {
                        label:"C3",
                        click: ()=>{console.log("C3")}
                    },
                    {
                        label:"C4",
                        click: ()=>{console.log("C4")}
                    }
                ]
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width:600,
        height:600,
        webPreferences: {
            nodeIntegration: true, // Enable Node.js integration if needed
            contextIsolation: false,
        }
    });
    mainWindow.loadFile('index.html')
    // Open Developer Tools automatically
    mainWindow.webContents.openDevTools();
})

