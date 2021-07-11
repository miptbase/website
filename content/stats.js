const axios = require('axios');
const csv = require('csvtojson');
const fs = require('fs');

const outputPath = './content/stats.json';
const url = 'https://docs.google.com/spreadsheets/d/1jUAB1w-GIAbBz-jcpkUBlu996QZFAhpzWVFzOgbPTIo/gviz/tq?tqx=out:csv&sheet=stats';
const output = [];
(async () => {
  const response = await axios.get(url);
  csv()
    .fromString(response.data)
    .subscribe((csvLine)=>{ 
      output.push(csvLine)
    })
    .on('done', (error)=>{
      fs.writeFileSync(outputPath, JSON.stringify(output));
    })
})();
