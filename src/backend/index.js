const { ipcMain } = require('electron');

const pathsToRow = require('./pathsToRow');

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths);

    pathsToRow(paths)
        .then(rows => console.log(rows))
        .then(() => {
            event.reply('process-subtitles', [
                {name: 'i', amount: 1234},
                {name: 'you', amount: 900},
                {name: 'he', amount: 853},
            ]);
        })

});