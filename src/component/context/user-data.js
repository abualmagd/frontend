export let access=JSON.parse(localStorage.getItem('access'));
export let userId=JSON.parse(localStorage.getItem('userId'));
export let secret="";
export let token="";

export const updateAccess=(value)=>{
    localStorage.setItem('access',JSON.stringify(value))
}


export const setUserId=(value)=>{
    userId=value;
    localStorage.setItem('userId',JSON.stringify(value))
}


export const setToken=(value)=>{
    token=value;
}


export const setSecret=(value)=>{
    secret=value;
}