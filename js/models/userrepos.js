class UserRepos {

    constructor(name, url) {
        this._name = name,
        this._url = url
        
    }

    showRepos() {
        return {
            name: this._name,
            url: this._url
        }
    }

}