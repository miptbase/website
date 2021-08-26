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

const outputPathReport = './content/report.js';
const urlReport = 'https://docs.google.com/spreadsheets/d/1jUAB1w-GIAbBz-jcpkUBlu996QZFAhpzWVFzOgbPTIo/gviz/tq?tqx=out:csv&sheet=yield';
const outputReport = [];
(async () => {
  const response = await axios.get(urlReport);
  csv({
    noheader:true,
    output:"csv"
  })
      .fromString(response.data)
      .subscribe((csvRow)=>{
        outputReport.push(csvRow)
      })
      .on('done', (error)=>{
        fs.writeFileSync(outputPathReport, `export const report = ${JSON.stringify(outputReport)}`);
      })
})();

const outputPathBoard = './content/board.json';
const urlBoard = 'https://docs.google.com/spreadsheets/d/1jUAB1w-GIAbBz-jcpkUBlu996QZFAhpzWVFzOgbPTIo/gviz/tq?tqx=out:csv&headers=0&sheet=board';
const outputBoard = [];
(async () => {
  const response = await axios.get(urlBoard);
  csv()
    .fromString(response.data)
    .subscribe((csvLine)=>{
      outputBoard.push(csvLine)
    })
    .on('done', (error)=>{
      fs.writeFileSync(outputPathBoard, JSON.stringify(outputBoard));
    })
})();

const imagesFolder = './public/media/donors';
const imagesDonors = [];
fs.readdirSync(imagesFolder).forEach(file => {
  imagesDonors.push(file);
})
fs.writeFileSync('./content/donorsImages.json', JSON.stringify(imagesDonors));
