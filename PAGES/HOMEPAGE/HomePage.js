import { CREATEPOSTPAGE } from "../CREATEPOSTPAGE/CreatePostPage.js";
import { MYFEED } from "../MYFEEDPAGE/MyFeedPage.js";
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

        <button id='CreatePostPage' class='PostButtons'>Create Post</button>

        <button id='ClosePost' class='PostButtons'>Cancel</button>
        
        `;

        const ClosePost=document.querySelector('#ClosePost');

        ClosePost.addEventListener('click',()=>{

            HiddenDiv.style.display='none';

            HiddenDiv.style.height='0px';

        })

        const CreatePostPage=document.querySelector('#CreatePostPage');

        CreatePostPage.addEventListener('click',()=>{

            CREATEPOSTPAGE(DIV);

        })


    })

    
    //APP START FUNCTIONS
    MYFEED(DIV)

    const Main=document.querySelector('.HomeDiv');

    const RoundFooter=document.querySelector('.HomeFooter');

    //FOOTER
    let prevScrollPos = Main.scrollTop;

    Main.addEventListener('scroll', () => {

        const currentScrollPos = Main.scrollTop;

        if (currentScrollPos > prevScrollPos) {
            // Scrolling down, hide the footer
            RoundFooter.style.display = 'none';
        } else {
            // Scrolling up, show the footer
            RoundFooter.style.display = 'inline-flex';
        }

        prevScrollPos = currentScrollPos;

    });

    

}




export{HOMEPAGE}