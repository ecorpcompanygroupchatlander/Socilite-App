import { USERDATA } from "../../APIS/SociliteApp.js";

const GETUSERSRDATA=(DIV)=>{

    const UserData=document.querySelector('.UserData');

    const ProfileUserName=document.querySelector('.ProfileUserName');

    const MyData={
        "ID":localStorage.getItem('User'),
        "type":"Advance"
        
    }

    fetch(USERDATA,{
        method:'POST',
        mode:'cors',
        body:JSON.stringify(MyData)
    })

    .then(res => res.json())

    .then((result) => {

        const MYDETAILS=result.userData;
    
        ProfileUserName.innerHTML=MYDETAILS.UserName;

    }).catch((err) => {
        console.log(err)
    });

}

export{GETUSERSRDATA}