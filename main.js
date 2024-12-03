const {app, BrowserWindow, Menu, shell} = require("electron");
const path = require("path");

const menuItems = [
    {
        label: "Menu",
        submenu: [
            {
                label: "About"
            }
        ]
    },
    {
        label: "File",
        submenu: [
            {
                label: "Learn More",
                click: shell.openExternal('https://bitfumes.com')
            },
            {
                label: "Exit",
                click: ()=>app.quit()
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

const createWindow = ()=>{
    const win = new BrowserWindow({
        height: 500,
        width: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    win.loadFile("index.html")
}

app.whenReady().then(()=>{
    createWindow();
})