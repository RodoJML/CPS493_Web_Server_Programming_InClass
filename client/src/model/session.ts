import {reactive} from 'vue';

 const  session = reactive({
    user: null as User | null,
    // Typescrip is only for compile time, not when running. 
 })

 interface User {

    // All data should be only within the Model
    // Question marks make things optional in typescript
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;

    // Typescript is only for compile time
    // Interface defines the attributes
 }

 export function useSession(){
    return session;
 }

 export function login(){
    session.user = {
        name: "John Doe"
    }
 }