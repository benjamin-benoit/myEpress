import MyExpress from "./myexpress_module/MyExpress";

let app = new MyExpress();
app.listen(8080);
app.get('/coucou', (req, res) =>{
    res.write("coucou")
});