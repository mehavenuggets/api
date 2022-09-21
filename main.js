import { api } from './config/api';
let dropdown = document.getElementById("countries");


dropdown.addEventListener('input', async (e) => {
    let country = e.target.value;
    console.log(country)
    try {
        await api.get('statistics', {params: {country:country}})
        .then(response => {
            console.log(response.data.response[0]);
        })
    } catch (error) {
        console.error(error);
    }
})

try {
    await api.get('countries')
    .then(response => {
        const allCountries = response.data.response;
        allCountries.forEach(country => {
            let option = document.createElement("option");
            option.innerHTML = country;
            dropdown.appendChild(option);
        });
    })
} catch (error) {
    console.error(error);
}