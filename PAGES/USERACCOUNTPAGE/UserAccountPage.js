import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { GETUSERSRDATA } from "./GetUsersData.js";
import { UPDATEPROFILEPHOTOPAGE } from "./UpdateProfilePhoto.js";

const USERACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML=`

    <div class='ProfileImageHolder'>

        <img id='CoverPhoto' class='CoverPhoto' src='./IMAGES/logos/socie 512.jpg'/>

        <img id='ProfileImage' class='ProfilePhoto' src='./IMAGES/logos/socie 512.png'/>

        <h1 class='ProfileUserName'></h1>

        <img class='UpdateProfile' src='./IMAGES/Icons/post.png'/>
    
    </div>

    <header>

        <img id='UserAccountBackIcon' class='BackIcon' src='./IMAGES/Icons/back.png'/>

        <img id='UserAccountBackIcon' class='SettingsIcon' src='./IMAGES/Icons/setting.png'/>

    </header>

    

        <div id='HiddenDiv' class='HiddenDiv'></div>
    
    `;

    const UserAccountBackIcon=document.querySelector('#UserAccountBackIcon');

    UserAccountBackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV)

    })

    GETUSERSRDATA(DIV);

    const ProfileImage=document.querySelector('#ProfileImage');

    ProfileImage.addEventListener('click',()=>{

        const HiddenDiv=document.querySelector('#HiddenDiv');
        HiddenDiv.style.display='block';
        HiddenDiv.style.height='100%';
        HiddenDiv.style.borderRadius='0px';
        
    })

    const UpdateProfile=document.querySelector('.UpdateProfile');

    UpdateProfile.addEventListener('click',()=>{

        const HiddenDiv=document.querySelector('#HiddenDiv');
        HiddenDiv.style.display='block';
        HiddenDiv.style.height='100px';

        
        HiddenDiv.innerHTML=`

        <button class='PostButtons'>Cover Photo</button>

        <button id='ProfilePhotoUpdate' class='PostButtons'>Profile Photo</button>

        <button id='ClosePost' class='PostButtons'>Cancel</button>
        
        `;

        const ClosePost=document.querySelector('#ClosePost');

        ClosePost.addEventListener('click',()=>{

            HiddenDiv.style.display='none';

            HiddenDiv.style.height='0px';

        })

        const ProfilePhotoUpdate=document.querySelector('#ProfilePhotoUpdate');

        ProfilePhotoUpdate.addEventListener('click',()=>{
            
            UPDATEPROFILEPHOTOPAGE(DIV);

        })


    })

}

export{USERACCOUNTPAGE}