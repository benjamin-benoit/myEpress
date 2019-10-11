"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var MyExpress = /** @class */ (function () {
    function MyExpress() {
        var _this = this;
        this.routes = [];
        console.log(this.routes);
        this.server = http_1["default"].createServer(function (req, res) {
            var route = _this.routes.find(function (route) {
                console.log(req);
                return route.method === req.method && route.path === req.url;
            });
            if (route) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                route.callback(req, res);
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('no implemented');
            }
            res.end(); //end the response
        });
    }
    MyExpress.prototype.listen = function (port) {
        console.log("listening on port: " + port);
        this.server.listen(port);
    };
    MyExpress.prototype.get = function (path, cb) {
        this.routes.push({ method: 'GET', path: path, callback: cb });
    };
    return MyExpress;
}());
exports["default"] = MyExpress;
