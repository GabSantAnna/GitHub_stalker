//nem sei por onde começar
class UserView {
 
     showUser(user) {

         return `<img src="${user.avatar}">
         <h2>${user.login}</h2>
         <p>${user.name}</p>
         <p>${user.bio}</p>
         <p>Followers: ${user.followers} Following: ${user.following} </p>`;
    }

}