import express, { Express, Request, Response } from "express";
import morgan from "morgan";

const port = 3000;
const app: Express = express();

app.use(morgan("dev"));

app.get("/", (req: Request, res: Response, next) => {
    res.send("Hello World From express and Typescript!!!! Enjoy writing Typescript!!!");
});


app.get("/home", (req: Request, res: Response, next) => {
    res.send("Welcome Home to express with Typesrcipt!!!!  We hope you enjoy writing Typescript!!!");
});

app.get("/end", (req: Request, res: Response, next) => {
  res.send(
    "Goodbye from Typescript!!!! We hope you enjoy writing Typescript!!!"
  );
});

app.listen(port, () => {
    console.log(`Now Listening on port ${port}`)
})