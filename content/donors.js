const axios = require('axios');
const csv = require('csvtojson');
const fs = require('fs');

const outputPath = './content/donors.json';
const url = 'https://docs.google.com/spreadsheets/d/1jUAB1w-GIAbBz-jcpkUBlu996QZFAhpzWVFzOgbPTIo/gviz/tq?tqx=out:csv&sheet=donors';
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

const outputPathReport = './content/report.json';
const urlReport = 'https://docs.google.com/spreadsheets/d/1jUAB1w-GIAbBz-jcpkUBlu996QZFAhpzWVFzOgbPTIo/gviz/tq?tqx=out:csv&sheet=report';
const outputReport = [];
(async () => {
  const response = await axios.get(urlReport);
  csv()
      .fromString(response.data)
      .subscribe((csvLine)=>{
        outputReport.push(csvLine)
      })
      .on('done', (error)=>{
        fs.writeFileSync(outputPathReport, JSON.stringify(outputReport));
      })
})();

const imagesFolder = './public/media/donors';
const imagesDonors = [];
fs.readdirSync(imagesFolder).forEach(file => {
  imagesDonors.push(file);
})
fs.writeFileSync('./content/donorsImages.json', JSON.stringify(imagesDonors));
console.log(imagesDonors);
