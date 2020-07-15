class ReposReq {

    constructor() {

        throw new Error ("nao presica de instancia")
    }

    static getRepos(input) {

        let reqRepos = new XMLHttpRequest();
        reqRepos.open("GET", `https://api.github.com/users/${input}/repos`)

        reqRepos.onload = () => {

            let repos = JSON.parse(reqRepos.responseText);
            console.log(repos);
            
            let divR = document.querySelector("#divr");
            divR.removeAttribute("class");
            divR.innerHTML=""

            let mostraRepos = new ReposViews();


            for(let i = 0; i < repos.length; i++) {

                let repoObj = new UserRepos(repos[i].name, repos[i].html_url);

                divR.innerHTML += mostraRepos.showRepos(repoObj.showRepos());
                
            }
            
            
        }                                                        
    
        reqRepos.send()
        
    }
}