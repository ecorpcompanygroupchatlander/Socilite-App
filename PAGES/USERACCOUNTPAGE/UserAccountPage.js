import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const USERACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML=`

    <img class='ProfilePhoto' src='../IMAGES/logos/socie 512.jpg'/>

    <header>

        <img id='UserAccountBackIcon' class='BackIcon' src='../IMAGES/Icons/back.png'/>

        <img id='UserAccountBackIcon' class='SettingsIcon' src='../IMAGES/Icons/setting.png'/>

    </header>

    
    
    `;

    const UserAccountBackIcon=document.querySelector('#UserAccountBackIcon');

    UserAccountBackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV)

    })

}

export{USERACCOUNTPAGE}