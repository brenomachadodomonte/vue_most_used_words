const { ipcMain } = require('electron');

const pathsToRow = require('./pathsToRow');
const prepareData = require('./prepareData');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths);

    pathsToRow(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => {
            event.reply('process-subtitles', groupedWords);
        })

});