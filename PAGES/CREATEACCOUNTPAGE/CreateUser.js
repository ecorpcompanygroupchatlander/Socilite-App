import { CREATEUSERAPI, LOGINAPI } from "../../APIS/SociliteApp.js";
import { CREATEACCOUNTPRIVACYPOLICY } from "../CreateAccountPrivacyPolicies/CreateAccountPrivacyPolicy.js";

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    try {
        const buffer = await crypto.subtle.digest('SHA-256', data);
        const hashedArray = Array.from(new Uint8Array(buffer));
        const hashedPassword = hashedArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
};

const CREATEUSER = (DIV) => {
    const MESSAGE = document.querySelector('.CreaeteMessage');
    const USERNAME = document.querySelector('#CreateUserName');
    const EMAIL = document.querySelector('#CreateEmail');
    const PASSWORD = document.querySelector('#CreatePassword');
    const DATE = document.querySelector('#CreateDate');
    const LOCATION = document.querySelector('#CreateCountry');
    const TELEPHONE = document.querySelector('#CreateTelephone');
    const CREATEACCOUNTBUTTON = document.querySelector('#CreateAccountButton');

    const firstLetter = EMAIL.value.charAt(0).toUpperCase();

    const birthYear = DATE.value.slice(-4);

    const randomStringLength = 11 - 1 - 4;
    const randomString = generateRandomString(randomStringLength);

    const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);

    if (USERNAME.value && EMAIL.value && PASSWORD.value && DATE.value && LOCATION.value && TELEPHONE.value) {
        
         CREATEACCOUNTBUTTON.innerHTML = `<img class='LoadingIcon' src='./IMAGES/Icons/loading.png'/>`;
        
         fetch(LOGINAPI)

        .then(res => res.json())

        .then((data) => {

            const user = data.find(user => user.Email === EMAIL.value);

            if (user) {

                MESSAGE.innerHTML = 'User Email Already Taken';

                setTimeout(() => {

                    MESSAGE.innerHTML = ``;

                    CREATEACCOUNTBUTTON.innerHTML =`Create Account`;

                }, 2000);

                
            } else {
               
                hashPassword(PASSWORD.value)

                .then((hashedPassword) => {

                const USERDATA = {
                    "UserName": USERNAME.value,
                    "Email": EMAIL.value,
                    "Password": hashedPassword,
                    "Password2": hashedPassword,
                    "Date": DATE.value,
                    "Telephone": TELEPHONE.value,
                    "Location": LOCATION.value,
                    "CreatedOn": new Date(),
                    "SecretCode":secretCode
                };

                fetch(CREATEUSERAPI, {
                    method: 'Post',
                    mode:'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(USERDATA),
                })

                .then(res => res.text())

                .then((result) => {

                    fetch(LOGINAPI)

                    .then(res=>res.json())

                    .then(data=>{

                        const user = data.find(user => user.Email === EMAIL.value);

                        if (user) {
                            
                            localStorage.setItem('User',user.SecretCode);

                            CREATEACCOUNTPRIVACYPOLICY(DIV)

                        } 

                    })

                    .catch(err=>console.log(err))
                    
                })

                .catch((err) => {

                    console.log(err)

                    MESSAGE.innerHTML = 'Something Wrong';

                    setTimeout(() => {

                        MESSAGE.innerHTML = ``;

                        CREATEACCOUNTBUTTON.innerHTML =`Create Account`;

                    }, 2000);

                });

            })
            .catch((err) => {
                console.error(err);
            });
            }
        
        
        })

        
    } else {
        MESSAGE.innerHTML = `Fill all Parts`;

        setTimeout(() => {
            MESSAGE.innerHTML = ``;
        }, 2000);
    }
};

export { CREATEUSER };
