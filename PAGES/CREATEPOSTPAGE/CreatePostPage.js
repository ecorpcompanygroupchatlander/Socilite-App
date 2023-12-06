import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { CREATEUSERPOST } from "./CreateUserPost.js";

const CREATEPOSTPAGE=(DIV)=>{

    DIV.innerHTML=`

    <img class='PostProfilePhoto' src='./IMAGES/logos/socie 512.jpg'/>

    <header>

        <img id='CreatePostbackIcon' class='BackIcon' src='./IMAGES/Icons/back.png'/>

        <img  class='SettingsIcon' src='./IMAGES/Icons/setting.png'/>

    </header>

    <textarea name="PostStory" id="PostStory" cols="30" placeholder='Write Your Story' rows="10"></textarea>

    <button class='PostButton'>

        <h1>Select Image</h1>

        <img src='./IMAGES/Icons/grid.png '/>
    
    </button>

    <button id='CreatePostButton' class='PostButton'>

        <h1>Create Post</h1>

        <img src='./IMAGES/Icons/upload.png '/>

    </button>
    
    `;

    const CreatePostbackIcon=document.querySelector('#CreatePostbackIcon');

    CreatePostbackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV);

    })

    const CreatePostButton=document.querySelector('#CreatePostButton');

    CreatePostButton.addEventListener('click',()=>{

        CREATEUSERPOST(DIV);

    })


}

export{CREATEPOSTPAGE}