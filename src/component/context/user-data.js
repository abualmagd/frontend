
export let secret="";
export let token="";


export const updateAccess=(value)=>{
    localStorage.setItem('secrets',JSON.stringify(value))
}


export const setUserId=(value)=>{
    
    localStorage.setItem('userId',JSON.stringify(value))
}


export const setToken=(value)=>{
    token=value;
}


export const setSecret=(value)=>{
    secret=value;
}