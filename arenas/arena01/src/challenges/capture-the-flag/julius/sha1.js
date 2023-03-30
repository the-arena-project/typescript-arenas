const { createHash } = require("crypto");
const { readFileSync, existsSync } = require("fs");

if (!existsSync(process.argv[2])) {
    console.error(`${process.argv[2]}: no such file or directory.`)
    process.exit(1);
}

const fileContent = readFileSync(process.argv[2]);

process.stdout.write(
    createHash('sha1')
    .update(fileContent)
    .digest('hex')
);