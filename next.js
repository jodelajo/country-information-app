//functie alle landen sorteren op grootte van populatie van laag naar hoog.
// [x] - async functie maken
// [x] try en catch(e)
// [x] - get api
// [x] - destructuring
// [x] - sort landen op population

async function countriesOfTheWorld () {
    try {
    result = await axios.get(`https://restcountries.eu/rest/v2/all`);
    const { data } = result;
    console.log(data)
        data.sort((a, b) => {
        return a.population - b.population;
         });
    countryNames(data)
    } catch (e) {
        console.error(e);
            }
}
countriesOfTheWorld()


//lijst met landnamen uit de database
// [ ] - functie maken
// [ ] - loggen
// [ ] - for loop maken
// [
function countryNames (arrayOfCountries) {
    let country = '';
    for (let i = 0; i < arrayOfCountries.length; i++) {

        country = arrayOfCountries[i].name;
        console.log(country)
    }

}


