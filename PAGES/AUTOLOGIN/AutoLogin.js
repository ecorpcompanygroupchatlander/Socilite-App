import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const AUTOLOGIN=(DIV)=>{

    const USER=localStorage.getItem('User');

    if (USER) {
        
        HOMEPAGE(DIV);

    } else {
        
        LOGINPAGE(DIV);

    }

}

export{AUTOLOGIN}