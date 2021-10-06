module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            const groupedWords = words;

            resolver(groupedWords);
        } catch (e){
            reject(e);
        }
    });
}