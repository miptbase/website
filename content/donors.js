const { exec } = require("child_process");
const patch = "public/files/donors.csv"
const cp = require('child_process');
const url = 'https://docs.google.com/spreadsheets/d/1CD_sGqy6C5dpChHq2uPs-I8q3MZOkRuyS5e4tMeTHhA/gviz/tq?tqx=out:csv&sheet=donors';

let download = async function(uri, filename){
    let command = `curl -o ${filename}  '${uri}'`;
    let result = cp.execSync(command);
};


async function getDonors() {
    await download( url, patch);
};

getDonors();


exec( `csvtojson ${patch} > content/donors.json`, (error, stdout, stderr) => {
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





