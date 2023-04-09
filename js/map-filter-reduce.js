const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersWith3Languages = users.filter(user => user.languages.length >= 3);
// console.log(usersWith3Languages);

const mapEmail = users.map(user => user.email)
// console.log(mapEmail)

const totalYearsExperience = users.reduce((acc,user)=>{
    return acc + (user.yearsOfExperience);
},0)
let average = totalYearsExperience / users.length
// console.log(average)

const longestEmail = mapEmail.reduce((acc, email) => {
    if (email.length > acc.length) {
        return email;
    } else {
        return acc;
    }
}, '');

// console.log(longestEmail);

const instructorNames = users.reduce((acc,user,index) => {
    if(index+1 === users.length) {
        return acc + ` ${user.name}.`
    }else
        return acc + ` ${user.name},`;
},'your instructors are:')
// console.log(instructorNames)

let uniqueLanguages = users.reduce((acc,user) => {
    user.languages.forEach(function(language){
        if(!acc.includes(language)){
            acc.push(language);
        }
    })
    return acc;
},[])

// console.log(uniqueLanguages)