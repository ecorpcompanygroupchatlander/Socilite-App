const LOGINUSER=(DIV)=>{

    //INT SECTION
    const MESSAGE=document.querySelector('.LogInMessage');
    const EMAIL=document.querySelector('#LoginEmail');
    const PASSWORD=document.querySelector('#LoginPassword');
    const LOGINBUTTON=document.querySelector('#LoginButton');

    if (EMAIL.value && PASSWORD.value) {

        LOGINBUTTON.innerHTML=`

        <img class='LoadingIcon' src='./IMAGES/Icons/loading.png'/>
        
        `;

        
        
        
    } else {
        
        MESSAGE.innerHTML=`Fill all Parts`;

        setTimeout(() => {
        
            MESSAGE.innerHTML=``;
            
        }, 2000);

    }

}

export{LOGINUSER}