import { CREATEUSERAPI } from "../../APIS/SociliteApp.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const CREATEUSER=(DIV)=>{

    const MESSAGE=document.querySelector('.CreaeteMessage');
    const USERNAME=document.querySelector('#CreateUserName');
    const EMAIL=document.querySelector('#CreateEmail');
    const PASSWORD=document.querySelector('#CreatePassword');
    const DATE=document.querySelector('#CreateDate');
    const LOCATION=document.querySelector('#CreateCountry');
    const TELEPHONE=document.querySelector('#CreateTelephone');
    const CREATEACCOUNTBUTTON=document.querySelector('#CreateAccountButton');

    const firstLetter = EMAIL.value.charAt(0).toUpperCase();
    
    const birthYear = DATE.value.slice(-4); // Extract last 4 characters for the year
                
        // Calculate the length of the random string to make the total length 11
    const randomStringLength = 11 - 1 - 4; // 1 character for the first letter of email, 4 characters for the birth year
                
        // Generate the random string with the calculated length
    const randomString = generateRandomString(randomStringLength);
        
        // Ensure the total length of the secret code is 11
    const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
        

    if (USERNAME.value && EMAIL.value && PASSWORD.value && DATE.value && LOCATION.value && TELEPHONE.value) {
        
        const USERDATA={
            "UserId":secretCode,
            "UserName":USERNAME.value,
            "Email":EMAIL.value,
            "Password":PASSWORD.value,
            "D.O.B":DATE.value,
            "Telephone":TELEPHONE.value,
            "Location":LOCATION.value,
            "CreatedOn":new Date(),
            "type":"Advance",

        }

        CREATEACCOUNTBUTTON.innerHTML=`

            <img class='LoadingIcon' src='./IMAGES/Icons/loading.png'/>

        `;

        fetch(CREATEUSERAPI,{
            method:'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(USERDATA)
        })

        .then(res =>res.json())

        .then((result) => {
            
            if (result.status==='success') {
                
                localStorage.setItem('User',result.userId)

                HOMEPAGE(DIV);

            } else {
                
                MESSAGE.innerHTML=result.message;

                setTimeout(() => {
                
                    MESSAGE.innerHTML=``;

                    CREATEACCOUNTBUTTON.innerHTML=`

                    Create Account
                    
                    `;
                    
                }, 2000);

            }

        }).catch((err) => {
            
            MESSAGE.innerHTML=result.message;

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

export{CREATEUSER}