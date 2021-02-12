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



async function getCountryInfo(){

    let country = 'Belgium';
    console.log("country", country)

    const url = (`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
    const response = await axios.get(url);
    console.log("RES:", response);
    const subArea = response.data[0].region;
    console.log("region:", subArea)
    const population = response.data[0].population;
    console.log(population)
    basicInfoCountry = (`${country} is situated in ${subArea}. It has a population of ${population} people.`);
    console.log(basicInfoCountry)
    const capital = response.data[0].capital;
    console.log(`The capital is ${capital}.`)

}

const pushbutton = document.getElementById("button");
pushbutton.addEventListener('click', getCountryInfo);
//
//
// 2. Maak op basis van de response de volgende string en log dit in de console:
//    [country-naam] is situated in [subarea-name]. It has a population of [amount] people.

// 3. Maak op basis van de response de volgende string en log dit in de console: The capital is [city]

// 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
// In een land kunnen één of twee currencies gebruikt worden:
//     1 valuta: and you can pay with [currency]'s
// 2 valuta's: and you can pay with [currency]'s and [currency]'s

async function currency(){
    let countryCurrency = 'Euro';
    console.log('Country currency', countryCurrency)
}