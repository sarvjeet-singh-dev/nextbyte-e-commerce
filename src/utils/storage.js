export const storage = {
    get:(key,fallback = null)=>{
        try{

            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        }catch(error){
            console.error("Error Getting Data From Local Storage",error);
            return fallback;
        };
    },
    
    set:(key,value)=>{
        try{
            const data = localStorage.setItem(key,JSON.stringify(value));
            return data;
        }catch(error){
            console.error("Error Setting Data to Local Storage",error);
        };
    },
};