import startServer from "./dist/server";

const port = process.env.PORT || 5000;
startServer({port}).then(r => console.log(`Started on port=${port}`));
