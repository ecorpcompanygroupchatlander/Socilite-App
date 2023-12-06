import { USERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const HOMEPAGE=(DIV)=>{

    DIV.innerHTML=`

    <div class='HomeDiv'></div>

    <header>
    
        <h1>My Feed</h1>

        <h1>Videos</h1>

    </header>
    
    <footer class='HomeFooter'>

        <img src='./IMAGES/Icons/chat.png'/>

        <img id='CreatePost' src='./IMAGES/Icons/post.png'/>

        <img id='ProfileIcon' src='./IMAGES/Icons/profile.png'/>
    
    </footer>

    <div class='HiddenDiv'></div>
    
    `;

    const ProfileIcon=document.querySelector('#ProfileIcon');

    const HiddenDiv=document.querySelector('.HiddenDiv');

    ProfileIcon.addEventListener("click",()=>{

        USERACCOUNTPAGE(DIV);

    })

    const CreatePost=document.querySelector('#CreatePost');

    CreatePost.addEventListener('click',()=>{
        
        HiddenDiv.style.display='inline-flex';
        HiddenDiv.style.height='100px';

        HiddenDiv.innerHTML=`

        <button class='PostButtons'>Go Live</button>

        <button class='PostButtons'>Create Post</button>

        <button id='ClosePost' class='PostButtons'>Cancel</button>
        
        `;

        const ClosePost=document.querySelector('#ClosePost');

        ClosePost.addEventListener('click',()=>{

            HiddenDiv.style.display='none';

            HiddenDiv.style.height='0px';

        })


    })

    
    
    


}




export{HOMEPAGE}