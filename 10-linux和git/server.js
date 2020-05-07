let http = require("http");

let server = http.createServer(function(req,res){
    res.end("hello linux6668888")
})

server.listen(3000,()=>{
    console.log("服务器运行起来了~")
})