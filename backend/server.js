const http = require('http');
const fs = require('fs');

//creating a server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    //set header content type
    res.setHeader('Content-Type', 'text/html');

    //send an html file
    fs.readFile('../frontend/src/test.html', (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })


    //write what we want to response with
    // res.write('<p>hello, ninjas</p>');
    // //end the process
    // res.end();
});

//listen method
server.listen(3000, 'localhost', () => {
    //function fires when we start listening for a request
    console.log('listening for requests on port 3000');
});

//localhost is 127.0.0.1 = listening for our request coming from our own computer
//port number represents a port into a computer "doors into a computer"
//servrar behöver port numbers - får inte använda samma nummer som andra 