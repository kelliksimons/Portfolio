const server = require("express")();

const PORT = process.env.PORT || 3000;

server.get("", (req,res)=>{
    res.send("Hello World");
});

server.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});