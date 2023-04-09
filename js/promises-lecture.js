import {getGithubUsers, renderGithubUser,getLastCommit} from './github.js'

(async ()=>{
    // Get users
    let users = await getGithubUsers();
    console.log(users);
    // Render the users
    const usersGrid = document.querySelector('#userGrid');
    users.forEach(function(user){
        renderGithubUser(user, usersGrid);
    });
    let repo = await getLastCommit('medellinK')
    console.log(repo)

})();