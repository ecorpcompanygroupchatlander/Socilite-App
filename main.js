const DIV=document.querySelector('div');

import("./CONNECTION/Connection.js").then((module) => {
            
    const { CONNECTION } = module;

    CONNECTION(DIV);

});