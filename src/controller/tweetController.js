import axios from "axios";

const baseUrl = 'http://localhost:8080/api/twitter';
const access =JSON.parse(localStorage.getItem('secrets'));
let str = "Bearer ";
str +=access;
let headerz = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": str
  }
}




export function postTweet(tweetContent,managedAccount){

let url=baseUrl+"/tweet"

let data={
    content:tweetContent,
    account:managedAccount,
    publishTime:new Date().toISOString(),
};
    return axios.post(url,data,headerz)
}