const shell = require('shelljs')

function killLoop () {
    if (shell.exec('taskkill /f /im MyPcToast.exe') == 0) {
        return true
    } else {
        return false
    }
}