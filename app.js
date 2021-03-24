const http = require('http');
const fs = require('fs');
const local_module = require("./tools/check_pass");

http.createServer(function (request, response) {
    // root , get

    if (request.url === "/" && request.method === "GET") {

        fs.readFile('./public/index.html', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })


    } else if (request.url === "/photo.jpg" && request.method === "GET") {
        fs.readFile('public/photo.jpg', (err, img) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(img);
            response.end();
        })
    } else if (request.url === "/loginForm.css" && request.method === "GET") {

        fs.readFile('./public/loginForm.css', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
    } else if (request.url === "/style.css" && request.method === "GET") {

        fs.readFile('./public/style.css', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
    } else if (request.url === "/js/main.js" && request.method === "GET") {

        fs.readFile('./public/js/main.js', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
        //! ---------------------------------> POST METHOD <----------
    } else if (request.url === "/getJason"  && request.method === "POST") {

        request.on('data', function (data) {
            console.log(check_pass(data));
            if(check_pass(data)){

                response.end("true");
            }else{

                response.end("false");
            }

        });

    } else {

        response.write("Bad Request 435");
        response.end();
    }




}).listen(5005);

console.log("server started on port 5005 !!");
