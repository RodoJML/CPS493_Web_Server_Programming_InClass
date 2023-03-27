

const API_URL = 'http://localhost:3000/api/V1/';
// Depending on client or servver need to change this 
// Create models and use these functions within

export function rest(url: string){
    return fetch(url).then(res => res.json());
}

export function api(url: string){
    return rest(API_URL + url);
}