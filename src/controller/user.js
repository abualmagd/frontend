import axios from "axios";



const baseUrl = 'http://localhost:8080/api';
let headerz = {
  headers: {
    "Content-Type": "application/json"
  }
}


export async function login({ eml, pass }) {

  const data = {
    email: eml,
    password: pass
  };
  return axios.post(baseUrl + '/auth/login',
    data, headerz
  );
}

export async function logOut() {
  const userId = JSON.parse(localStorage.getItem('userId'));
  let url = baseUrl + "/users/logout?id=" + userId;
  const access =JSON.parse(localStorage.getItem('secrets'));
  let str = "Bearer ";
  str +=access;
  console.log(str)
  return axios.post(url,null,
     {
      headers: {
        "Content-Type": "application/json",
        "Authorization": str
      }
  }
  );
}

export async function register({ eml, nm, pass }) {
  console.log(eml, nm, pass);
  const data = {
    name: nm,
    email: eml,
    role: "normal",
    password: pass
  };

  console.log(data)
  return axios.post(baseUrl + '/auth/register',
    data
    , headerz
  );

}





export async function newToken(){
  let refresh=localStorage.getItem("refresh");
 console.log(refresh)
let refreshToken=JSON.parse(refresh);
let data= {
  "refreshToken":refreshToken
};
const url=baseUrl+"/auth/refreshtoken";
return axios.post(url,data,headerz
  
);
}












///return request oauth and authorize url
export async function getAouthRequest() {
  const access =JSON.parse(localStorage.getItem('secrets'));
  let url = baseUrl + "/twitter/request";
  let str = "Bearer ";
  str +=access;
  console.log(str)
  const headers= { headers: {
    "Content-Type": "application/json",
    "Authorization": str  
  }};
  return axios.get(url,
     headers
  );
}


//go to twitter to get oauth- request and verifier 
export async function RequestVerifier(outh) {
  window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${outh}`,"_self");
}



//get from backurl oauth- request and verifier 
//create mannaged account with secrets

export async function saveNewTwitterAccount({outh,verifier,access}){
  const userId = JSON.parse(localStorage.getItem('userId'));
 // const access =JSON.parse(localStorage.getItem('secrets'));
  console.log(access);
  let url = baseUrl + `/twitter/tokens?oauthToken=${outh}&verifier=${verifier}&id=${userId}`;
  let str = "Bearer ";
  str +=access;
  console.log(str)
  const headers= { headers: {
    "Content-Type": "application/json",
    "Authorization": str  
  }};
  return axios.post(url,null,
headers
  );
}

