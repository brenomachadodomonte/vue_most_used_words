module.exports = rows => {
    return new Promise((resolver, reject) => {
       try {

           resolver(rows);
       } catch (e){
           reject(e);
       }
    });
}