var http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if(req.url==='/'){
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream('node.html').pipe(res);
  }
  else if(req.url ==='/form' && req.method == 'POST'){
    var rawData = '';
    req.on('data',function(data){
       rawData += data;
    })
    req.on('end',function(){
        var inputdata = new URLSearchParams(rawData);
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write('You have enterted-');
        res.write('Name: ' +inputdata.get('name') + '<br>');
        res.write('Register No. : ' +inputdata.get('regno') + '<br>');
        res.write('Year of Study: ' +inputdata.get('yr') + '<br>');
        res.write('Department: ' +inputdata.get('dept') + '<br>');
        res.write('School: ' +inputdata.get('school') + '<br>');
        res.write('Event(s) participating in: ' +inputdata.get('event') + '<br>');
        res.end();
    });
  }
});

server.listen(2001,function(){
  console.log('listening at 2001')
}); 
