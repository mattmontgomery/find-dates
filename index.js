const moment = require("moment");

const texts = process.argv[2].split(/\.\s+/);

// console.log(text);

function run(texts) {
  // console.log(texts, "\n\n\n\n\n");
  texts.forEach(text => {
    const regexes = [
      /[jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec]*(\.){0,1}.+?[1|2][0|9]\d{2}/gi,
      /Funeral services/,
      /University/,
      /College/
    ];

    regexes.forEach(regex => {
      const matches = text.match(regex);
      if (matches) {
        console.log(matches);
      }
    });
    console.log(text, "\n");
  });
}

if (texts) {
  run(texts);
} else {
  console.log("No text added");
}
