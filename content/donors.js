const axios = require('axios');
const csv = require('csvtojson');
const fs = require('fs');

const outputPath = './content/donors.json';
const url = 'https://docs.google.com/spreadsheets/d/1CD_sGqy6C5dpChHq2uPs-I8q3MZOkRuyS5e4tMeTHhA/gviz/tq?tqx=out:csv&sheet=donors';
const output = [];
(async () => {
  const response = await axios.get(url);
  csv()
    .fromString(response.data)
    .subscribe((csvLine)=>{ 
      output.push(csvLine);
    })
    .on('done', (error)=>{
      fs.writeFileSync(outputPath, JSON.stringify(output));
    })
})();