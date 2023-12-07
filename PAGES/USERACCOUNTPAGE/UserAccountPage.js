import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { GETUSERSRDATA } from "./GetUsersData.js";

const USERACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML=`

    <div class='ProfileImageHolder'>

        <img class='CoverPhoto' src='./IMAGES/logos/socie 512.jpg'/>

        <img class='ProfilePhoto' src='./IMAGES/logos/socie 512.png'/>

        <h1 class='ProfileUserName'></h1>
    
    </div>

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