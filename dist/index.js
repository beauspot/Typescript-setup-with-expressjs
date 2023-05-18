"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const port = 3000;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.get("/", (req, res, next) => {
    res.send("Hello World From express and Typescript!!!! Enjoy writing Typescript!!!");
});
app.get("/home", (req, res, next) => {
    res.send("Welcome Home to express with Typesrcipt!!!!  We hope you enjoy writing Typescript!!!");
});
app.get("/end", (req, res, next) => {
    res.send("Goodbye from Typescript!!!! We hope you enjoy writing Typescript!!!");
});
app.listen(port, () => {
    console.log(`Now Listening on port ${port}`);
});
