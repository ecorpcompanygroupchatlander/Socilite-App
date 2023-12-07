import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";
import { CREATEUSER } from "./CreateUser.js";

const CREATEACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML=`

        <h1 class='AppName' >Socilite</h1>

        <h1 class='CreaeteMessage'></h1>

        <input type="text"  placeholder="Enter User Name" id="CreateUserName">

        <input type="email"  placeholder="Enter Email" id="CreateEmail">

        <input type="password"  placeholder="Enter Password" id="CreatePassword">

        <input type="text"  placeholder="Enter Date Of Birth " id="CreateDate">

        <input type="tel"  placeholder="Enter Telephone Number " id="CreateTelephone">

        <input type="text"  placeholder="Enter Your Country " id="CreateCountry">

        <button id='CreateAccountButton' class='LoginButton'>Create Account</button>

        <button id='LoginAccountButton' class='LoginButton' >LogIn</button>

    `;

    const CreateDate=document.querySelector('#CreateDate');

    CreateDate.addEventListener('click',()=>{

        CreateDate.type='date';

    })

    const LoginAccountButton=document.querySelector('#LoginAccountButton');

    LoginAccountButton.addEventListener('click',()=>{

        LOGINPAGE(DIV);

    })

    const CreateAccountButton=document.querySelector('#CreateAccountButton');

    CreateAccountButton.addEventListener('click',()=>{

        CREATEUSER(DIV);

    })



}

export{CREATEACCOUNTPAGE}