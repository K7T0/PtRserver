const http= require('http')

const PORT= process.env.PORT || 8080;

const server=http.createServer();

server.on("request", (req, res) => {
    res.statusCode=200;
    res.write("Hello World");
    res.end();
})

server.listen(PORT, (err) => {
    err? console.log(err): console.log(`Server is running on port ${PORT}`);
})