class UserController {

    constructor() {

        throw new Error("Nao precisa de instancia")

    }


  static  geraUser(input) {


        let req = new XMLHttpRequest();
        req.open("GET",'https://api.github.com/users/' + input);

        req.onload = () => {

            let div = document.querySelector("#div");
            div.removeAttribute("class");
            let mostraUser = new UserView();

            let reqResponse = JSON.parse(req.responseText);
            
            let user = new User(reqResponse.login, 
                reqResponse.name, 
                reqResponse.bio,
                reqResponse.avatar_url, 
                reqResponse.html_url,
                reqResponse.followers,
                reqResponse.following);

                console.log(user)
                
              
                if (user._login == undefined) {
                    alert("este usuario nao existe");
                    throw new Error ("input invalido");
                    
                };
             
            
            div.innerHTML = mostraUser.showUser(user.retornaUser());

        }
            
        req.send();
        
    }

}