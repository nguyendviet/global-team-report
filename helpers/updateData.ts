const fs = require('fs');
const csv = require('csv');
const parse = require('csv-parse/lib/sync');
const path = require('path');
const moment = require('moment');

const SOURCE_PATH = path.join(__dirname, '..', 'data');
const TARGET_PATH = path.join(__dirname, '..', 'client', 'src', 'data');

const SOURCE_FILE = 'Field Office Internet Speeds Jan-Feb 2020 - Sheet3.csv';
const TARGET_FILE = 'InternetSpeedWorldReport.json';
const currentData = require(`${TARGET_PATH}/${TARGET_FILE}`);

function updateData() {
    const updateDate = moment().format('YYYY-MM-DD');
    const newData = fs.readFileSync(`${SOURCE_PATH}/${SOURCE_FILE}`, 'utf-8');
    // Convert csv to object:
    const newRecords = parse(newData, {
        delimiter: ','
    });
    const updatedCountries = {};

    for (const record of newRecords) {
        const [countryCode, value] = record;
        updatedCountries[countryCode] = parseInt(value);
    }

    const updatedRecords = [];
    currentData.forEach((country) => {
        const countryCode = country['hc-key'];
        if (countryCode in updatedCountries) {
            country['value'] = updatedCountries[countryCode];
        }
        updatedRecords.push(country);
    });

    // Save updated countries to file:
    fs.writeFileSync(`${SOURCE_PATH}/internet-speed-update-${updateDate}.json`, JSON.stringify(updatedCountries, null, "  "), 'utf8');

    // Overwrite current data file:
    fs.writeFileSync(`${TARGET_PATH}/${TARGET_FILE}`, JSON.stringify(updatedRecords, null, "  "), 'utf8');
}

updateData();
