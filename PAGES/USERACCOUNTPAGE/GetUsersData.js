import { USERDATA } from "../../APIS/SociliteApp.js";

const GETUSERSRDATA=(DIV)=>{

    const UserData=document.querySelector('.UserData');

    UserData.innerHTML=`

    <img class='BigLoadingIcon' src='./IMAGES/Icons/loading.png'/>
    
    `;

    const MyData={
        "ID":localStorage.getItem('User'),
        "type":"Advance"
    }

    fetch(USERDATA,{
        method:'Post',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(MyData)
    })

    .then(res =>res.json())

    .then((result) => {

        const MYDATA=result.userData;
        
        UserData.innerHTML=`

        <div class='UserDetailsDiv'>
        
            <h1 class='MyDetails' >${MYDATA.UserName}</h1>

            <button class='UpdateBox'>Update</button>

        </div>

        <div class='UserDetailsDiv'>
        
            <h1 id='MyEmail' class='MyDetails' >${MYDATA.Email}</h1>

        </div>

        <div class='UserDetailsDiv'>
        
            <h1 class='MyDetails' >${MYDATA.Location}</h1>

            <button class='UpdateBox'>Update</button>

        </div>

        <div class='UserDetailsDiv'>
        
            <h1 class='MyDetails' >${MYDATA.Telephone}</h1>

            <button class='UpdateBox'>Update</button>

        </div>
                
        `;

    }).catch((err) => {
      
        console.log(err)
        
    });


}

export{GETUSERSRDATA}