import fs from "fs"

import { utilService } from "../services/util.service.js"
import { resolve } from "path"
import { rejects } from "assert"

downloadCountryFlags()
function downloadCountryFlags() {
    const countries = getCountries()
        downloadFlags(countries)
        .then(()=> {
            console.log('Your flags are ready')
        })
}

function getCountries() {
    const contents = utilService.readJsonFile('data/countries.json', 'utf8')
    let list = contents.sort((a, b) => b.population - a.population)
    let topFive = list.splice(0, 5)
    return topFive
}

function downloadFlags(countries) {

    const files = countries.map(c => {
        const url = c.flags.png
        const fileName = `img/${c.name.common}.png`
        return utilService.download(url, fileName)
    })
    return Promise.all(files)
}

function demoSync() {
    const contents = utilService.readJsonFile('data/countries.json', 'utf8')
    let topFive = contents.sort((a, b) => b.population - a.population).splice(0.5)
}

