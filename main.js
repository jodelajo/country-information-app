//
// 1. Maak een 'Zoek'-knop op de pagina
// 2. en koppel deze aan een functie
// 3. die de gegevens over `België` ophaalt en dit in de console logt.
//
//     _Tip:_ Als de de [documentatie](https://www.npmjs.com/package/axios) bekijkt en op `async` zoekt, vindt je een voorbeeld van een GET-request.
//
// ## 1. De gebruiker kan de knop zien
//
// - [ ] Zoek knop maken (HTML)
// - [ ] id meegeven -> om met javascript te selecteren (HTML)
//
// ## 2. De gebruiker gaat klikken

// - [ ] Knop selecteren (getElementById, opslaan in variabele)
// - [ ] Event listener & Event Handler toevoegen aan knop (addEventListener, click, async functie)
//
// ## 3. Wanneer de gebruiker klikt wordt mijn async function aangeroepen
//
// - [ ] Variable met maken country -> "Belgie" (hardcoden)
//     - [ ] Variabele Url maken -> https://restcountries.eu/rest/v2/name/${country}?fullText=true
// - [ ] axios.get(url)
// - [ ] await toevoegen
// - [ ] response -> checken

// 7. Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:
//
//   [IMAGE: flag]
// [country-name]
//     [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
//     The capital is [city] and you can pay with [currency]'s
// They speak [language], [language] and [language]


async function getCountryInfo(){

    let country = 'Switzerland';
    const url = (`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
    const response = await axios.get(url);
    const countryData = response.data[0];
    console.log(countryData)
    const subArea = response.data[0].region;
    const populationOfCountry = response.data[0].population;
    const basicInfoCountryString = (`${countryData.name} is situated in ${subArea}. It has a population of ${populationOfCountry} people.`);
    console.log(basicInfoCountryString)
    const capital = response.data[0].capital;
    const capitalString = (`The capital is ${capital} `)
    console.log(capitalString)
    const currencies = countryData.currencies;
    const languagesOfCountry = countryData.languages;
    // const countryFlag = countryData.flag;

    const afkorting = countryData.alpha3Code;
    const afkOnderkast = afkorting.toLowerCase();
    console.log(afkOnderkast)
    const flagurl = (`https://restcountries.eu/data/${afkOnderkast}.svg`);
    console.log(flagurl)
    const currencyString = currency(currencies)
    console.log(currencyString)
    const languageString = languages(languagesOfCountry)
    console.log(languageString)

    const image = document.createElement('img');
    image.setAttribute('class', 'flagImage')
    image.src = flagurl;
     const src = document.getElementById('flag');
     src.appendChild(image);
    const countryName = document.getElementById('country');
    countryName.textContent = country;
    const geoInfo = document.getElementById('geo');
    geoInfo.textContent = basicInfoCountryString;
    const capCurInfo = document.getElementById('cap');
    capCurInfo.textContent = capitalString + currencyString;
    const langInfo = document.getElementById('lang')
    langInfo.textContent = languageString;
}


// DOM voor vlag
// pad voor vlag dynamisch gemaakt
// div met id gemaakt
// get element by id
// appendchild
//
//
// 2. Maak op basis van de response de volgende string en log dit in de console:
//    [country-naam] is situated in [subarea-name]. It has a population of [amount] people.

// 3. Maak op basis van de response de volgende string en log dit in de console: The capital is [city]

// 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
// In een land kunnen één of twee currencies gebruikt worden:
//     1 valuta: and you can pay with [currency]'s
// 2 valuta's: and you can pay with [currency]'s and [currency]'s

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

// Bonusopdracht: Maak een functie die ongeacht het aantal talen
// die in een land gesproken worden, een string maakt:
//
//     1 taal: They speak [language]
// 2 talen: They speak [language] and [language]
// 3 talen: They speak [language], [language] and [language]
// etc.
function languages(languageArray) {
    // for (const language of languageArray) {
    //     console.log('language', language)
    //     let count = '';
    //     count = count + `They speak ${language.name}`;
    //     console.log(count)
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
    console.log(event.code)
    console.log("country input", event.code === "Enter")
    if (event.code === "Enter") {
        getCountryInfo()
    }
}
// countryInput()


const pushbutton = document.getElementById("button");
pushbutton.addEventListener('click', getCountryInfo);
const searchCountry = document.getElementById("input");
searchCountry.addEventListener('keypress', countryInput);
console.log(searchCountry)
