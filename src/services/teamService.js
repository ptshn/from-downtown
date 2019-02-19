import axios from 'axios'

function create(data) {
    const url = '/api/team';
    const config = {
        method: 'POST'
        , data: data
        , withCredentials: true
    }
    const promise = axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)

    return promise;
}

function readAll() {
    const url = '/api/team';
    const config = {
        method: 'GET'
    }
    const promise = axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)

    return promise;
}

function readById(id) {
    const url = `/api/team/player/id/${id}`
    const config = {
        method: 'GET'
    }
    const promise = axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)

    return promise;
}

function del(id) {
    const url = `/api/team/player/id/${id}`
    const config = {
        method: 'DELETE'
    }
    const promise = axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler)

    return promise;
}

const responseSuccessHandler = response => {
    console.log(response.data)
    return response.data;
}

const responseErrorHandler = error => {
    console.log(error)
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.error(error.response.data.errors)
    }
    return Promise.reject(error);
}

export { create, readAll, readById, del, responseSuccessHandler, responseErrorHandler }