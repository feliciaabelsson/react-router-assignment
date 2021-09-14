const { Router } = require('express');
const router = new Router();
const fs = require('fs');

router.get('/', (req, res) => {
    //hämtar och läser av data från filen coffes.json
    const menu = fs.createReadStream('coffees.json');
    //data som hämtats till menu skrivs till response
    menu.pipe(res);
})

//exporterar router så att den kan användas 
module.exports = router;