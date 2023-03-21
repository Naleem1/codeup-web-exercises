// let person = {
//     firstName: 'Najee',
//     lastName: 'Aleem',
//     email: 'Naleem25@gmail.com'
// }
//
// // let personJson = {
// //     'firstName': 'Najee',
// //     'lastName': 'Aleem',
// //     'email': 'Naleem25@gmail.com'
// // }
//
// let personJson = JSON.stringify(person);

const getPerson = async() => {
    try {
        let response = await fetch(`https://swapi.dev/api/people`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    let luke = await getPerson()
    // let c3po = await getPerson(2)
    console.log(luke)
    // console.log(c3po)

})();
