import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const CREATEACCOUNTPRIVACYPOLICY=(DIV)=>{

    DIV.innerHTML=`
    
        <div id='PrivacyPolicyDiv' class='HomeDiv'></div>

        <button class='NextButton'>Continue</button>


    `;

    const PrivacyPolicyDiv=document.querySelector('#PrivacyPolicyDiv');

    const NextButton=document.querySelector('.NextButton');

    NextButton.addEventListener('click',()=>{

        HOMEPAGE(DIV)
    })

    fetch('./DOCUMENTS/PRIVACYPOLICY/PrivacyPolicy.txt')

    .then(res =>res.text())

    .then((result) => {
        
        PrivacyPolicyDiv.innerHTML=result;

    }).catch((err) => {
        console.log(err)
    });



}

export{CREATEACCOUNTPRIVACYPOLICY}