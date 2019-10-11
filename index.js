"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var MyExpress_1 = __importDefault(require("./myexpress_module/MyExpress"));
var app = new MyExpress_1["default"]();
app.listen(8080);
app.get('/coucou', function (req, res) {
    res.write("coucou");
});
