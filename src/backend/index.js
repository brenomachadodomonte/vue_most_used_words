const { ipcMain } = require('electron');

const pathsToRow = require('./pathsToRow');
const prepareData = require('./prepareData');

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths);

    pathsToRow(paths)
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
        .then(() => {
            event.reply('process-subtitles', [
                {name: 'i', amount: 1234},
                {name: 'you', amount: 900},
                {name: 'he', amount: 853},
            ]);
        })

});