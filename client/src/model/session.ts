import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import * as myFetch from './myFetch';

const session = reactive({
   user: null as User | null,
   isLoading: false,
   messages: [] as {
      msg: string[],
      type: 'success' | 'danger' | 'warning' | 'info'
   }[],
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

export function useSession() {

   session.push
   return session;
}

export function api(url: string) {
   session.isLoading = true;
   return myFetch.api(url)
      .catch(
         err => {
            console.error(err);
            session.messages.push({ msg: err.message ?? JSON.stringify(err), type: 'error', })
         }
      )
      .finally(() => {
         session.isLoading = false;
      })
}

export function login() {
   session.user = {
      name: "John Doe"
   }
}

export function useLogout() {
   const router = useRouter(); // Compisition functions usually start with use

   return function () {
      console.log({ router });
      session.user = null;
      router.push('/login');
   }
}