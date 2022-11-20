import {
    configApi
} from './utils.js';

class Api {
    constructor(configApi) {
        this._url = configApi.url;
        this._headers = configApi.headers;

    }

    _onResponce(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject({
                message: "Ошибка на стороне сервера:",
                res
            });
        }
    }


    getAllCard() {
        return fetch(`${this._url}/cards`, {
                headers: this._headers
            })
            .then((res) => {
                return this._onResponce(res);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
                method: 'GET',
                headers: this._headers
            })
            .then((res) => {
                return this._onResponce(res);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    setUserAvatar(data) {
        console.log(data.avatar)
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: data.avatar,
                })
            })
            .then((res) => {
                return this._onResponce(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then((res) => {
                return this._onResponce(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    addCard({
        nameCard,
        linkCard
    }) {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: nameCard,
                    link: linkCard
                })
            })
            .then((res) => {
                return this._onResponce(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    delCard(idCard) {
        return fetch(`${this._url}/cards/${idCard}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then((res) => {
                return this._onResponce(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    changeLikeCardStatus(idCard, isLiked) {       
            return fetch(`${this._url}/cards/${idCard}/likes`, {
                    method: isLiked ? 'PUT' : "DELETE",
                    headers: this._headers
                })
                .then((res) => {
                    return this._onResponce(res);
                })
                .catch((err) => {
                    console.log(err);
                })
    }    

}

const api = new Api(configApi);

export default api;