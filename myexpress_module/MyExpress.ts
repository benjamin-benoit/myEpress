import http from 'http';
import IRoutes from "./IRoutes";

export default class MyExpress{

    private routes: IRoutes[] = [];
    private server: http.Server;

    constructor(){
        console.log(this.routes);
        this.server = http.createServer( (req, res) => {

            let route= this.routes.find( (route) => {
                return  (route.method === req.method || route.method === 'ALL') && route.path === req.url;
            });
            if(route){
                res.writeHead(200, {'Content-Type': 'text/html'});
                route.callback(req, res);
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('no implemented');
            }
            res.end(); //end the response
        })
    }

    listen(port: number){
        console.log(`listening on port: ${port}`);
        this.server.listen(port);
    }

    get(path: string, cb: Function){
        this.routes.push({method: 'GET', path: path, callback: cb})
    }

    put(path: string, cb: Function){
        this.routes.push({method: 'PUT', path: path, callback: cb})
    }

    post(path: string, cb: Function){
        this.routes.push({method: 'POST', path: path, callback: cb})
    }

    delete(path: string, cb: Function){
        this.routes.push({method: 'DEL', path: path, callback: cb})
    }

    all(path: string, cb: Function){
        this.routes.push({method: 'ALL', path: path, callback: cb})
    }

    render(file: string, args, cb: Function){
        
    }

}

