import axios from "axios";
import { access ,userId} from "../component/context/user-data";

  const baseUrl='http://localhost:8080/api';
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
   return axios.post(baseUrl+'/auth/login',
            data,headers
            );
  }

  export async  function  logOut(){
    let url=baseUrl+"/users/logout?id="+userId;
    console.log('access : ')
    console.log(access)
   return axios.post(url,
            null,{headers:{
              "Content-Type": "application/json",
              "Authorization":`Bearer ${access}` ///TODO:error here 
            }}
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
       return axios.post(baseUrl+'/auth/register',
            data
            ,headers
            );
         
           }


           export async  function  getOuth(){
            let url=baseUrl+"/twitter/k";
           return axios.get(url,
                    null,{headers:{
                      "Content-Type": "application/json",
                      "Authorization":`Bearer ${access}` ///TODO:error here 
                    }}
                    );
          }

          export async function RequestVerifier(outh){
            window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${outh}`, '_blank');
          }