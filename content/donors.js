const { exec } = require("child_process");
const data = require("../content/home.json");
const patch = data.donors_file;

exec( `csvtojson public/${patch} > content/donors.json`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})




