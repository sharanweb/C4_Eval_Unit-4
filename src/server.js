const app = require("./index");
const connect = require("./config/db");

app.listen(5008, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message)
    }
    console.log("listening on port 5008");
})