const {app, BrowserWindow} = require("electron")
const path = require("path")
const url = require("url")

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }))

    // Advanced JavaScript awesomeness
    win.on("closed", () => win = null)
}

app.on("ready", createWindow)

// Advanced JavaScript awesomeness
app.on("window-all-closed", () => process.platform !== "darwin" ? app.quit() : null)

app.on("activate", () => win === null ? createWindow() : null)
