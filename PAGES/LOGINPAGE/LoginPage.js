import { CREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";
import { LOGINUSER } from "./LoginUser.js";

const LOGINPAGE=(DIV)=>{

    DIV.innerHTML=`

        <h1 class='AppName' >Socilite</h1>

        <h1 class='LogInMessage'></h1>

        <input type="email" name="Email" placeholder="Enter Email" id="LoginEmail">

        <input type="password" name="Password" placeholder="Enter Password" id="LoginPassword">

        <button id='LoginButton' class='LoginButton' >LogIn</button>

        <button id='CreateAccountButton' class='LoginButton'>Create Account</button>
    
    `;

    const LoginButton=document.querySelector('#LoginButton');

    const CreateAccountButton=document.querySelector('#CreateAccountButton');

    LoginButton.addEventListener('click',()=>{

        LOGINUSER(DIV);

    })

    CreateAccountButton.addEventListener('click',()=>{

        CREATEACCOUNTPAGE(DIV);

    })

    

}


export{LOGINPAGE}