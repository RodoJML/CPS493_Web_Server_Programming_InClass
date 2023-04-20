const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1/';
// Centralized 
// Depending on client or server need to change this 
// Create models and use these functions within

// This is a generic function that can be used to call any REST API
export function rest(url: string, data?: any, method?: string, headers?: any) {
    
    // All is returned here is the promise from fetch
    return fetch
        (
            //Fetch Parameter 1: URL
            url,

            //Fetch Parameter 2: Options Object
            {
                method: method ?? (data ? 'POST' : 'GET'),
                headers:
                {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: data ? JSON.stringify(data) : undefined,
            },
        )
        .then(res => res.ok
            // Fetch returns a promise, so we can chain .then() calls
            ? res.json()
            : res.json().then(x => { throw ({ ...x, message: x.error }) }));
}

// This is a wrapper function that can be used to call any REST API
// This jus basically appends API_URL to it
export function api(url: string, data?: any, method?: string, headers?: any) {
    return rest(API_URL + url, data, method, headers);
}

export type DataEnvelope<T> = {
    data: T,
    isSuccess: boolean,
    error?: string,
}

export type DataListEnvelope<T> = DataEnvelope<T[]> & {
    total: number,
}

// when access just have to put the name of the controller 