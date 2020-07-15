class ReposViews {

    showRepos(repoUser) {
        return  `<div> 
        <p>${repoUser.name} | <a href="${repoUser.url}">${repoUser.url}</a></p>
        </div>`
    }
}