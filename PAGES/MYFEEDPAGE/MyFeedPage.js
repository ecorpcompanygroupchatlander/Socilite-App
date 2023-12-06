import { MYFEEDAPI, POSTIMAGEPATH } from "../../APIS/SociliteApp.js";

const MYFEED=(DIV)=>{

    const HomeDiv=document.querySelector('.HomeDiv');

    fetch(MYFEEDAPI)

    .then(res => res.json())

    .then((result) => {
        
        result.forEach(element => {

            console.log(element)
            const POSTHOLDERDIV=document.createElement('div');
            POSTHOLDERDIV.classList.add('POSTHOLDERDIV');
            POSTHOLDERDIV.innerHTML=`
            <img class='PosterprofilePicture' src='./IMAGES/logos/socie 512.jpg'/>
            <img  class='POSTEDIMAGE' src='${POSTIMAGEPATH+element.MovieImage}'/>
            <div class='AppHolders' >
                
                <img class='FunctionButtons' src='./IMAGES/Icons/heart.png'/>
               
                <img class='FunctionButtons' src='./IMAGES/Icons/comment.png'/>
                
                <img class='FunctionButtons'  src='./IMAGES/Icons/save.png'/>
                
                <img class='FunctionButtons' src='./IMAGES/Icons/share.png'/>  

            </div>
            `;
            HomeDiv.append(POSTHOLDERDIV);

            
            
        });

    }).catch((err) => {
       
        console.log(err);

    });


}

export{MYFEED}