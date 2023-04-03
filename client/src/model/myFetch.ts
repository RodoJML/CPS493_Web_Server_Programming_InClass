// Centralized 
const API_URL = 'http://localhost:3000/api/v1/';
// Depending on client or servver need to change this 
// Create models and use these functions within

export function rest(url: string) {
    return fetch(url)
        .then(res => res.ok ? res.json() : res.json().then(x=> { throw({ ...x, message: x.error }) } ) );

} // wrapper for fetch

export function api(url: string) {
    return rest(API_URL + url);
}

export type DataEnvelope<T> = {
    data: T;
    isSuccess: boolean,
    error?: string,
}

export type DataListEnvelope<T> = DataEnvelope<T[]> & {
    total: number,
}

// wrapper for fetch, appends URL to it
// when access just have tpo put the name of the controller 