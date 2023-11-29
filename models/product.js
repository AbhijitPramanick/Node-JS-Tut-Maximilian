const fs = require('fs');
const path = require('path');

module.exports = class product{
    constructor(t){
        this.title= t;
    }
    save(){
        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json');
        fs.readFile(p,(err,fileContent)=>{
            let products = [];
            // if(!err){
            //     products = JSON.parse(fileContent);
            // }
            if (!err) {
                try {
                    products = JSON.parse(fileContent);
                } catch (parseError) {
                    console.log('Error parsing JSON:', parseError);
                }
            }

            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        });
    }
    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            } else {
                try {
                    cb(JSON.parse(fileContent));
                } catch (parseError) {
                    console.log('Error parsing JSON:', parseError);
                    cb([]);
                }
            }
        });
    }
}
