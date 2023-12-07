import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { GETUSERSRDATA } from "./GetUsersData.js";

const USERACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML=`

    <img class='ProfilePicture' src='./IMAGES/logos/socie logo.jpg'/>

    <div class='UserData'></div>

    <header>

        <img id='UserAccountBackIcon' class='BackIcon' src='./IMAGES/Icons/back.png'/>

        <img id='UserAccountBackIcon' class='SettingsIcon' src='./IMAGES/Icons/setting.png'/>

    </header>

    

    
    
    `;

    const UserAccountBackIcon=document.querySelector('#UserAccountBackIcon');

    UserAccountBackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV)

    })

    GETUSERSRDATA(DIV);

}

export{USERACCOUNTPAGE}