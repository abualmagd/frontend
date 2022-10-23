import axios from "axios";
import moment from "moment-timezone";
const baseUrl = 'http://localhost:8080/api/';
const access =JSON.parse(localStorage.getItem('secrets'));
let str = "Bearer ";
str +=access;
let headerz = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": str
  }
}



//post tweet
export function postTweet(tweetContent,managedAccount){

let url=baseUrl+"twitter/tweet"

let data={
    content:tweetContent,
    account:managedAccount,
    publishTime:new Date().toISOString(),
};
    return axios.post(url,data,headerz)
}



//post thread 
export function postThread(listTweets,managedAccount,userId){

  let url=baseUrl+"twitter/thread"
  
  let data={
    creatorId:userId,
      tweets:listTweets,
      accountId:managedAccount["id"],
      timeZoneId:moment.tz.guess(),
      publishAt:new Date().toISOString(),
  };
      return axios.post(url,data,headerz)
  }









  export function scheduleTweet(tweet,managed,creator,publishAt){
    let url=baseUrl+"tweets/add";

    let data={
        content:tweet["content"],
        account:managed,
        publishTime:publishAt,
         };
     
     let params={
      creatorId:creator["id"],
      timeZone:moment.tz.guess(),
     };           
    return axios.post(url,data,headerz,params);
  }