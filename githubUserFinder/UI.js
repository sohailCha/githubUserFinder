class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }


    showUserProfile(user){
        // code to display user profile and info related to user
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
    `;
    }

    showRepositories(repos){
        let output = '';

        // code to generate divs for each repository
        repos.forEach(function(repo) {
        output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
    }


    showAlert(message,className){
        // if no user is found, then error div is inserted in DOM 
        const errorDiv = document.createElement('div');

        errorDiv.className = className;

        const messageNode = document.createTextNode(message);

        errorDiv.appendChild(messageNode);

        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');

        container.insertBefore(errorDiv,search);

        // remove error div after 4 secs
        setTimeout(() =>{
            this.clearAlert();
        },4000);
    }

    clearAlert(){
        
        const currentAlert = document.querySelector('.alert');

        // if error is there, then remove it.
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearUserProfiles(){
        // clearing user profile
        this.profile.innerHTML = '';

    }
}