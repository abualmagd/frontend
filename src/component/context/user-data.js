export let access="";
export let userId=JSON.parse(localStorage.getItem('userId'));

export const updateAccess=(value)=>{
    access=value;
}


export const setUserId=(value)=>{
    userId=value;
    localStorage.setItem('userId',JSON.stringify(value))
}
