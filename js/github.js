import keys from './keys.js'
export const getGithubUsers = async () => {
    try {
        const url = `https://api.github.com/users`
        const options = {
            headers: {
                'Authorization': `token ${keys.github}`
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
    // the .then syntax (older)
    // return fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error=>{
    //         console.log(error);
    //     });
}

export const getLastCommit = async (userName) => {
    try {
        let response = await fetch(`https://api.github.com/users/${userName}/events/public`);
        let data = await response.json();
        let commit = data.find((e) => e.type === 'PushEvent');
        console.log(commit.created_at)
        // console.log(date)
        return data;
    } catch (error) {
        console.log(error);
    }

};

export const renderGithubUser = (user, parent) => {
    let element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `
        <div class="img-wrapper">
            <img src="${user.avatar_url}" alt="User image" class="avatar">
        </div>
        <h2>${user.login}</h2>
        <a href="${user.html_url}" target="_blank">Go to Profile</a>
        <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove();
    });
    parent.append(element);
}

