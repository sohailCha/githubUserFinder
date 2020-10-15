
// instantiate github class
const github = new Github;

// instantiate UI class
const ui = new UI;

// catching search user
const searchUser = document.querySelector('#searchUser');

// event listener if user types anything in search bar
searchUser.addEventListener('keyup',(e) =>{

    // storing user input into a const
    const userText = e.target.value;

    // if input is valid , then get info related to input
    if(userText !== ''){
        github.getUser(userText)
            .then((data) =>{
                // if no user found, error div is inserted
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('User Not Found','alert alert-danger');
                } else {
                    // if user exists, then display user and repos
                    ui.showUserProfile(data.profile);
                    ui.showRepositories(data.repos);
                }
            })
    } else {
        // if input is invalid then remove user profile
        ui.clearUserProfiles();
    }
});