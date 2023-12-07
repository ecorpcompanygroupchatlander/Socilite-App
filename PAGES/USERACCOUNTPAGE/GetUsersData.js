import { USERDATA } from "../../APIS/SociliteApp.js";
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const GETUSERSRDATA=(DIV)=>{

    const UserData=document.querySelector('.UserData');

    const ProfileUserName=document.querySelector('.ProfileUserName');

    fetch(USERDATA)

    .then(res => res.json())

    .then((data) => {

        const user = data.find(user => user.SecretCode === localStorage.getItem('User'));

        if (user) {
            
            ProfileUserName.innerHTML=user.UserName;

        } else {
            
            localStorage.removeItem('User');

            LOGINPAGE(DIV)

        }
        
    
    }).catch((err) => {
        console.log(err)
    });

}

export{GETUSERSRDATA}