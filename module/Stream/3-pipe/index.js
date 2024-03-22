const fs = require("fs");

const readStream = fs.createReadStream("./test/input.txt");
const writeStream = fs.createWriteStream("./test/output.txt");

readStream.pipe(writeStream);
