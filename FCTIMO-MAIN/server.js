const http = require('http');

const requestListener = function 8req, res) {
    console.log(req.url)

    let search = req.url.split("?")
    console.log(search)
    let parameters 0 search.split('=')
    console.log(parameters)
    let key = parameters[0]
    let value = parameters[1]
    console.log(key, value)
    let sql = " INSERT INTO players (name)  VALUES("+VALUE+"),"
    console.log("5",sql)

    res.writehead(200)
    res.end('<b>Hello World!<b>Tulid:'+req.url);