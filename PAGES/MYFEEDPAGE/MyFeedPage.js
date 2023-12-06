import { MYFEEDAPI, POSTIMAGEPATH } from "../../APIS/SociliteApp.js";
import { VIEWPOSTERPROFILE } from "./ViewPostersProfile.js";

const MYFEED=(DIV)=>{

    const HomeDiv=document.querySelector('.HomeDiv');

    fetch(MYFEEDAPI)

    .then(res => res.json())

    .then((result) => {
        
        result.forEach(element => {

            const POSTHOLDERDIV=document.createElement('div');
            POSTHOLDERDIV.classList.add('POSTHOLDERDIV');

            //PROFILEICON
            const PostersName=document.createElement('div');
            PostersName.innerHTML=`<h1 id='PosterName'>${element.MovieName}</h1></div>`;
            PostersName.classList.add('PostersName');
            POSTHOLDERDIV.append(PostersName);

            //POSTERSPROFILE
            const POSTERSPROFILEIMAGE=document.createElement('img');
            POSTERSPROFILEIMAGE.src='./IMAGES/logos/socie 512.jpg';
            POSTERSPROFILEIMAGE.classList.add('PosterprofilePicture');
            POSTHOLDERDIV.append(POSTERSPROFILEIMAGE);

            //SHARE ICON
            const SHAREICON=document.createElement('img');
            SHAREICON.src='./IMAGES/Icons/share.png';
            SHAREICON.classList.add('ShareIcon');
            POSTHOLDERDIV.append(SHAREICON);

            //POSTEDIMAGE
            const POSTEDIMAGE=document.createElement('img');
            POSTEDIMAGE.src=POSTIMAGEPATH+element.MovieImage;
            POSTEDIMAGE.classList.add('POSTEDIMAGE');
            POSTHOLDERDIV.append(POSTEDIMAGE);

            //AppHolders
            const AppHolders=document.createElement('div');
            AppHolders.classList.add('AppHolders');
            POSTHOLDERDIV.append(AppHolders);

            //LIKESDIVCOUNTER
            const LikesDiv=document.createElement('div');
            LikesDiv.classList.add('LikesDiv');
            AppHolders.append(LikesDiv);

            //FUNCTIONS DIV
            const FunctionHolder=document.createElement('div');
            FunctionHolder.classList.add('FunctionHolder');
            AppHolders.append(FunctionHolder);

            //LIKES ICON
            const LIKEICON=document.createElement('img');
            LIKEICON.src='./IMAGES/Icons/heart.png';
            LIKEICON.classList.add('FunctionButtons');
            FunctionHolder.append(LIKEICON);

            //COMMENT ICON
            const COMMENTICON=document.createElement('img');
            COMMENTICON.src='./IMAGES/Icons/comment.png';
            COMMENTICON.classList.add('FunctionButtons');
            FunctionHolder.append(COMMENTICON);

            //SAVEICON 
            const SAVEICON=document.createElement('img');
            SAVEICON.src='./IMAGES/Icons/save.png';
            SAVEICON.classList.add('FunctionButtons');
            FunctionHolder.append(SAVEICON);

            //LIBRARYICON 
            const LIBRARYICON=document.createElement('img');
            LIBRARYICON.src='./IMAGES/Icons/library.png';
            LIBRARYICON.classList.add('FunctionButtons');
            FunctionHolder.append(LIBRARYICON);

            HomeDiv.append(POSTHOLDERDIV);

            //CLICK ON PROFILE ICON
            POSTERSPROFILEIMAGE.addEventListener('click',()=>{

                VIEWPOSTERPROFILE(DIV);

            })

         

            
            
        });

    }).catch((err) => {
       
        console.log(err);

    });


}

export{MYFEED}