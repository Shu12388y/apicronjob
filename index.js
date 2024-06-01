import axios from "axios";
async function apiCronJob(){
    try{
            const data = await axios.get("https://resourcebackend.onrender.com");
            console.log(data)
    }
    catch(e){
            console.log(e)
    }
}


setInterval(apiCronJob,600000);