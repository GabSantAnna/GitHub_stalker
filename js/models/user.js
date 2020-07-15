class User {

    constructor(login, name, bio , avatar, url, followers, following) {
        this._login = login;
        this._name = name;
        this._bio = bio
        this._avatar = avatar;
        this._url = url;
        this._followers = followers;
        this._following = following;
       
    }

    retornaUser() {

        return {
            login : this._login,
            name: this._name,
            bio: this._bio,
            avatar: this._avatar,
            url: this._url,
            followers: this._followers,
            following: this._following,
         

        };
    }

}