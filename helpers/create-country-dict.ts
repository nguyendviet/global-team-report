import * as fs from 'fs';
import * as path from 'path';

const SOURCE_PATH = path.join(__dirname, '..', 'data', 'raw');
const TARGET_PATH = path.join(__dirname, '..', 'data', 'raw');
const SOURCE_FILE = 'old-country-code-dict.json';

function buildCountryDictFrom(data, dictType) {
    const countryDict = {};
    const array: {string: string}[] = JSON.parse(data);

    array.forEach((element) => {
        const key = Object.keys(element)[0];
        const value = Object.values(element)[0];
        if (dictType === 'code') {
            countryDict[key] = value;
        }
        if (dictType === 'name') {
            countryDict[value] = key;
        }
    });

    return countryDict;
}

function createDictAt(path, data, dictType) {
    const dict = buildCountryDictFrom(data, dictType);
    fs.writeFileSync(`${path}/country-dict-by-${dictType}.json`, JSON.stringify(dict, null, "  "), 'utf8');
}

(function() {
    const data = fs.readFileSync(`${SOURCE_PATH}/${SOURCE_FILE}`, 'utf-8');
    createDictAt(TARGET_PATH, data, 'name');
}());
