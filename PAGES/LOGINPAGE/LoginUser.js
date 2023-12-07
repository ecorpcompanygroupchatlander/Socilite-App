import { LOGINAPI } from "../../APIS/SociliteApp.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

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

        const USERDATA={
            "Email":EMAIL.value,
            "Password":PASSWORD.value,
            "type":"Advance"
        }

        fetch(LOGINAPI,{
            method:'POST',
            body:JSON.stringify(USERDATA)
        })

        .then(res=>res.json())

        .then((result) => {
            
            if (result.status==='success') {
                
                localStorage.setItem('User',result.userId)

                HOMEPAGE(DIV);

            } else {
                
                MESSAGE.innerHTML=result.message;

                setTimeout(() => {
                
                    MESSAGE.innerHTML=``;

                    LOGINBUTTON.innerHTML=`

                    LogIn
                    
                    `;
                    
                }, 2000);

            }
            
        }).catch((err) => {
            
            MESSAGE.innerHTML='Something Went Wrong';

        setTimeout(() => {
        
            MESSAGE.innerHTML=``;
            
        }, 2000);

        });

        
        
        
    } else {
        
        MESSAGE.innerHTML=`Fill all Parts`;

        setTimeout(() => {
        
            MESSAGE.innerHTML=``;
            
        }, 2000);

    }

}

export{LOGINUSER}