module.exports = rows => {
    return new Promise((resolver, reject) => {
       try {
           const words = rows
                            .filter(filterValidRow)
                            .map(removePonctuation)
                            .map(removeTags);

           resolver(words);
       } catch (e){
           reject(e);
       }
    });
}

function filterValidRow(row){
    //Check if it's not number
    const notNumber = !parseInt(row.trim());

    //Not empty line
    const notEmpty = !!row.trim();

    //Not an interval
    const notInterval = !row.includes('-->');

    return notNumber && notEmpty && notInterval;
}

const removePonctuation = row => row.replace(/[,?!.-]/g,'');
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim();
