var http=require("http"),express=require("express"),fs=require("fs"),io=require("socket.io"),crypto=require("crypto"),app=express(),staticDir=express.static,server=http.createServer(app)
io=io(server)
var opts={port:process.env.PORT||1948,baseDir:__dirname+"/../../"}
io.on("connection",function(e){e.on("multiplex-statechanged",function(t){void 0!==t.secret&&null!=t.secret&&""!==t.secret&&createHash(t.secret)===t.socketId&&(t.secret=null,e.broadcast.emit(t.socketId,t))})}),["css","js","plugin","lib"].forEach(function(e){app.use("/"+e,staticDir(opts.baseDir+e))}),app.get("/",function(e,t){t.writeHead(200,{"Content-Type":"text/html"})
var r=fs.createReadStream(opts.baseDir+"/index.html")
r.on("error",function(e){t.write('<style>body{font-family: sans-serif;}</style><h2>reveal.js multiplex server.</h2><a href="/token">Generate token</a>'),t.end()}),r.on("readable",function(){r.pipe(t)})}),app.get("/token",function(e,t){var r=(new Date).getTime(),s=Math.floor(9999999*Math.random()),o=r.toString()+s.toString()
t.send({secret:o,socketId:createHash(o)})})
var createHash=function(e){return crypto.createCipher("blowfish",e).final("hex")}
server.listen(opts.port||null)
var brown="[33m",green="[32m",reset="[0m"
console.log(brown+"reveal.js:"+reset+" Multiplex running on port "+green+opts.port+reset)
