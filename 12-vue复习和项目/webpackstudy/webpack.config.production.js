const path = require("path");
module.exports = {
    mode:"production",
    entry:"./src/main.js",
    output:{
        filename:"bundle.[hash].js",  
        path:path.resolve(__dirname,"dist")
    }
}
