
class Github{
    constructor(){

        // to get client id and secret, you have to register your app on github oAuth apps.
        this.clientID = "YOUR_CLIENT_ID";
        this.clientSecret = "YOUR_CLIENT_SECRET";
        this.noOfRepos = 5;
        this.sortRepos = 'created : asc';
    }

    async getUser(user){

        // API call for user profile
        const userProfileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // API call for user repos
        const repositoriesResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.noOfRepos}&sort=${this.sortRepos}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await userProfileResponse.json();
        const repos = await repositoriesResponse.json();

        return {
            profile,
            repos
        }
    }
}
