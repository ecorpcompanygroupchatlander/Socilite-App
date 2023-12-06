const VIEWPOSTERPROFILE=(DIV)=>{

    const HiddenDiv=document.querySelector('.HiddenDiv');

    HiddenDiv.style.display='block';
    HiddenDiv.style.borderRadius='0px';
    HiddenDiv.style.height='100%';

    HiddenDiv.innerHTML=`

    <header>

        <img id='ProfileAccountBackIcon' class='BackIcon' src='./IMAGES/Icons/close.png'/>

        <img id='UserAccountBackIcon' class='SettingsIcon' src='./IMAGES/Icons/setting.png'/>

    </header>
    
    `;

    const ProfileAccountBackIcon=document.querySelector('#ProfileAccountBackIcon');
    
    ProfileAccountBackIcon.addEventListener('click',()=>{

        HiddenDiv.style.display='none';
        HiddenDiv.style.height='0%';

    })

}

export{VIEWPOSTERPROFILE}