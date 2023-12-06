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
            <div class='PostersName'><h1 id='PosterName'>${element.MovieName}</h1></div>
            <img class='PosterprofilePicture' src='./IMAGES/logos/socie 512.jpg'/>
            <img  class='POSTEDIMAGE' src='${POSTIMAGEPATH+element.MovieImage}'/>
            <img class='ShareIcon' src='./IMAGES/Icons/share.png'/>
            <div class='AppHolders' >
                <div class='LikesDiv'></div>
                <div class='FunctionHolder'>
                    <img class='FunctionButtons' src='./IMAGES/Icons/heart.png'/>
                    <img class='FunctionButtons' src='./IMAGES/Icons/comment.png'/>
                    <img class='FunctionButtons' src='./IMAGES/Icons/save.png'/>
                    <img class='FunctionButtons' src='./IMAGES/Icons/library.png'/>       
                </div>


             

            </div>
            `;
            HomeDiv.append(POSTHOLDERDIV);

            
            
        });

    }).catch((err) => {
       
        console.log(err);

    });


}

export{MYFEED}