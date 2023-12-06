const VIEWPOSTERPROFILE=(DIV)=>{

    const HiddenDiv=document.querySelector('.HiddenDiv');

    HiddenDiv.style.display='block';
    HiddenDiv.style.borderRadius='0px';
    HiddenDiv.style.height='100%';

    HiddenDiv.innerHTML=`

    <img class='PosterProfilePhoto' src='./IMAGES/logos/socie 512.jpg'/>

    <header>

        <img id='ProfileAccountBackIcon' class='BackIcon' src='./IMAGES/Icons/close.png'/>

        <img id='UserAccountBackIcon' class='SettingsIcon' src='./IMAGES/Icons/setting.png'/>

    </header>

    <div class='ContactHolder'>

        <button class='PostButtons'>Call</button>

        <button class='PostButtons'>Message</button>

        <button class='PostButtons'>Link Up</button>

        <div class='UsersInformation'></div>

    
    </div>

    
    
    `;

    const ProfileAccountBackIcon=document.querySelector('#ProfileAccountBackIcon');
    
    ProfileAccountBackIcon.addEventListener('click',()=>{

        HiddenDiv.style.display='none';
        HiddenDiv.style.height='0%';

        
    })

}

export{VIEWPOSTERPROFILE}