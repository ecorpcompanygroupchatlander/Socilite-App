const UPDATEPROFILEPHOTOPAGE=(DIV)=>{

    DIV.innerHTML=`

    <img class='ProfilePhoto' src='./IMAGES/logos/socie 512.jpg'/>

    <header>

        <img id='CreatePostbackIcon' class='BackIcon' src='./IMAGES/Icons/back.png'/>

    </header>

    <div class='TextPostHolder'>

        <button class='PostButton'>

            <h1>Select Image</h1>

            <img src='./IMAGES/Icons/grid.png '/>
        
        </button>

    </div>
    
    
    `;

}

export{UPDATEPROFILEPHOTOPAGE}