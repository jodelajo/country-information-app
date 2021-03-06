//functie alle landen sorteren op grootte van populatie van laag naar hoog.
// [x] - async functie maken
// [x] try en catch(e)
// [x] - get api
// [x] - destructuring
// [x] - sort landen op population

const countryList = document.getElementById('listOfCountries');

async function countriesOfTheWorld () {
    try {
    result = await axios.get(`https://restcountries.eu/rest/v2/all`);
    const { data } = result;
    console.log(data)

        data.sort((a, b) => {
            return a.population - b.population;
        });
        // const countries = result.data;
        data.map((country) => {
            const {name, flag, population, region} = country;
            // console.log(flag)
            // console.log(name)
            // console.log(region)

            const singleCountry = document.createElement('li');
            singleCountry.setAttribute('class', 'country-item')


            const displayFlags = document.createElement('img');
            // displayFlags.setAttribute('src', 'flag')
            displayFlags.src = flag;
            displayFlags.setAttribute('class', 'single-flag')
            singleCountry.appendChild(displayFlags)


            const displayCountryNames = document.createElement('span');
            displayCountryNames.setAttribute('id', 'countryName')
            displayCountryNames.setAttribute('class', colorsOfContinents(region))

            displayCountryNames.textContent = name;
            singleCountry.appendChild(displayCountryNames)

            const displayPopulation = document.createElement('p')
            displayPopulation.setAttribute('class', 'population');
            displayPopulation.textContent = `${name} has a population of ${population} people`;
            singleCountry.appendChild(displayPopulation);

            singleCountry.addEventListener('click', () => {
                toggleVisibility(displayPopulation);
            });

            countryList.appendChild(singleCountry)
            // colorsOfContinents(region)
        });


    } catch (e) {
        console.error(e);
            }
}

countriesOfTheWorld();


function colorsOfContinents (currentRegion) {
   switch (currentRegion) {
       case 'Asia':
           return 'red';
       case 'Europe':
           return 'yellow';
       case 'Africa':
           return 'blue';
       case 'Americas':
           return 'green';
       case 'Oceania':
           return 'purple';
       default:
           return 'default';
   }
}

function toggleVisibility(populationElement) {
    populationElement.classList.toggle('show-population');
}
