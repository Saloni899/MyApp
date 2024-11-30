import http from 'http';
const server=htt
http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/about'){
        res.write('welcome to about us page');
        res.end();
    }
    else if(url==='/contact'){
        res.write('Welcome to contact us page');
        res.end();
    }else{
        res.write('Welcome user');
        res.end();
    }
    console.log('client made a request');
});
Server.listen(1234);
console.log("server started");