// // pages/api/data.js
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export const scrappedDataService={
//   getScrappedData,

// }

//  async function getScrappedData(req, res) {
//   try {
//     const results = [];
//     const filePath = path.join(process.cwd(), 'data', 'beechtree.csv');

//     const parseCSV = () => {
//       return new Promise((resolve, reject) => {
//         const stream = fs.createReadStream(filePath);
//         stream.pipe(csv())
//           .on('data', (data) => results.push(data))
//           .on('end', () => resolve(results))
//           .on('error', (error) => reject(error));
//       });
//     };

//     const jsonData = await parseCSV();
//     return jsonData;
//   } catch (error) {
//     console.error('Error reading data file:', error);
//     res.status(500).json({ error: 'Error reading data file' });
//   }
// }
