import axios from "axios";
import { access ,userId} from "../component/context/user-data";

  const baseUrl='http://localhost:8080/api/auth';
  let headers = {
    headers: {
      "Content-Type": "application/json"
    } 
}


  export async  function  login({eml,pass}){

    const data= {
                email: eml,
                password: pass
              };
   return axios.post(baseUrl+'/login',
            data,headers
            );
  }

  export async  function  logOut(){
    const auth="Bearer "+access;
   return axios.post(baseUrl+'/logout',{ params: { id: userId } },
            null,{
              "Content-Type": "application/json",
              "Authorization":auth
            }
            );
  }

 export  async function   register({eml,nm,pass}){
  console.log(eml ,nm , pass);
  const data= {
    name:nm,
    email: eml,
    role:"normal",
    password:pass
};

console.log(data)
       return axios.post(baseUrl+'/register',
            data
            ,headers
            );
         
           }

