async function getCountryInfo() {
const refreshButton = document.getElementById("refresh")
    try {
        refreshButton.setAttribute('class', 'refresh-button')
        const inputElement = document.getElementById('input');
        let country = inputElement.value;
        const url = (`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
        const response = await axios.get(url);
        const countryData = response.data[0];
        console.log(response)
        console.log(countryData);
        const subArea = response.data[0].region;
        const populationOfCountry = response.data[0].population;
        const basicInfoCountryString = (`${countryData.name} is situated in ${subArea}. It has a population of ${populationOfCountry} people.`);
        const capital = response.data[0].capital;
        const capitalString = (`The capital is ${capital} `)
        const currencies = countryData.currencies;
        const countries = countryData.name;
        console.log('countries:', countries)
        const languagesOfCountry = countryData.languages;
        const afkorting = countryData.alpha3Code;
        const afkOnderkast = afkorting.toLowerCase();
        const flagUrl = (`https://restcountries.eu/data/${afkOnderkast}.svg`);
        const currencyString = currency(currencies)
        const languageString = languages(languagesOfCountry)
        const image = document.getElementById('flag');
        image.setAttribute('class', 'flagImage')
        image.src = flagUrl;
        const countryName = document.getElementById('country');
        countryName.textContent = country;
        const geoInfo = document.getElementById('geo');
        geoInfo.textContent = basicInfoCountryString;
        const capCurInfo = document.getElementById('cap');
        capCurInfo.textContent = capitalString + currencyString;
        const langInfo = document.getElementById('lang')
        langInfo.textContent = languageString;
        // validateInput(countries)
    } catch (e) {
        if (e.message === "Request failed with status code 404") {
            const message = "Failed to recognize country name.";
            const error = document.getElementById("error-message")
            error.textContent = message;
            refreshButton.removeAttribute('class');
        }
        refreshButton.addEventListener('click', reloadThePage);
    }
}



function reloadThePage(){
    window.location.reload();
}

function currency(currencyArray) {
    const currencyOne = currencyArray[0]
    const currencyTwo = currencyArray[1]
    if (currencyArray.length === 1) {
        return `and you can pay with ${currencyOne.name}'s.`
    }
    if (currencyArray.length > 1) {
        return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s.`
    }
}

function languages(languageArray) {
    const languageOne = languageArray[0];
    const languageTwo = languageArray[1];
    const languageThree = languageArray[2];
            if (languageArray.length === 1) {
                return `They speak ${languageOne.name}.`
            }
            if (languageArray.length === 2) {
                return `They speak ${languageOne.name} and ${languageTwo.name}.`
            }
            if (languageArray.length === 3) {
                return `They speak ${languageOne.name}, ${languageTwo.name} and ${languageThree.name}.`
            }
        }

function countryInput(event) {
    if (event.code === "Enter") {
        getCountryInfo()
    }
}

const pushbutton = document.getElementById("button");
pushbutton.addEventListener('click', getCountryInfo);
const searchCountry = document.getElementById("input");
searchCountry.addEventListener('keypress', countryInput);

