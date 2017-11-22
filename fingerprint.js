#!/usr/bin/env node
/**
 *
 * Print out the fingerprint of the given PDF file.
 *
 * Exit with non-zero status code if fingerprinting the file fails.
 *
 * Installation:
 *
 *   git clone git@github.com:seanh/pdf.js.git
 *   cd pdf.js
 *   git checkout fingerprint
 *   npm install
 *   npm install estraverse
 *   gulp dist-install
 *
 * Usage:
 *
 *   ./fingerprint.js /path/to/file.pdf
 *
 */
let pdfjs = require('pdfjs-dist');
let pdf = process.argv[2];

pdfjs.getDocument(pdf).then((doc) => {
  console.log(doc.fingerprint);
}).catch((error) => {
  process.exit(1);
});
