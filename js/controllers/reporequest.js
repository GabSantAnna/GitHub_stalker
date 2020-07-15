class UserRepos {

    constructor() {

        throw new Error ("nao presica de instancia")
    }
    static showRepos(input) {

        let reqRepos = new XMLHttpRequest;
        reqRepos.open("GET", `https://api.github.com/users/${input}/repos`)

        reqRepos.onload = () => {
            let userRepos = JSON.parse(reqRepos.responseText);
            console.log(userRepos);
            
            let divR = document.querySelector("#divr");
            divR.removeAttribute("class");

            userRepos.forEach(element => {
            
                
            });
        }
    
        reqRepos.send()
        
    }
}