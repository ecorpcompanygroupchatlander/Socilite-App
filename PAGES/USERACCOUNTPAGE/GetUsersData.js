import { POSTIMAGEPATH, USERDATA } from "../../APIS/SociliteApp.js";
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const GETUSERSRDATA=(DIV)=>{

    const UserData=document.querySelector('.UserData');

    const ProfileUserName=document.querySelector('.ProfileUserName');

    const ProfileImage=document.querySelector('#ProfileImage');

    const CoverPhoto=document.querySelector('#CoverPhoto');

    ProfileUserName.innerHTML=`
    
    <img class='LoadingIcon' src='./IMAGES/Icons/loading.png'/>
    
    `;

    fetch(USERDATA)

    .then(res => res.json())

    .then((data) => {

        const user = data.find(user => user.SecretCode === localStorage.getItem('User'));

        if (user) {
            
            ProfileUserName.innerHTML=user.UserName;

            ProfileImage.src=POSTIMAGEPATH+user.ProfilePhoto;

            CoverPhoto.src=POSTIMAGEPATH+user.ProfilePhoto;

        } else {
            
            localStorage.removeItem('User');

            LOGINPAGE(DIV)

        }
        
    
    }).catch((err) => {
        console.log(err)
    });

}

export{GETUSERSRDATA}