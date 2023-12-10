import { PHOTOUPLOAD, UPDATEPROFILEIMAGE } from "../../APIS/SociliteApp.js";
import { USERACCOUNTPAGE } from "./UserAccountPage.js";

const UPDATEPROFILEPHOTOPAGE = (DIV) => {
    DIV.innerHTML = `
        <img id='SelectedUploadedImage' class='ProfilePhoto' src='./IMAGES/logos/socie 512.jpg'/>
        <header>
            <img id='CreatePostbackIcon' class='BackIcon' src='./IMAGES/Icons/back.png'/>
        </header>
        <div class='TextPostHolder'>
            <input id='SelectProfileImage' name="imageFile" type='file'/>
            <button id='UploadProfileImage'>Change Image</button>
        </div>
    `;

    const CreatePostbackIcon = document.querySelector('#CreatePostbackIcon');

    CreatePostbackIcon.addEventListener('click', () => {
        USERACCOUNTPAGE(DIV);
    });

    const SelectProfileImage = document.querySelector('#SelectProfileImage');

    SelectProfileImage.addEventListener('change', (event) => {
        const SelectedUploadedImage = document.querySelector('#SelectedUploadedImage');

        // Get the selected file from the input
        const file = event.target.files[0];

        if (file) {
            // Use FileReader to read the selected file and set the image source
            const reader = new FileReader();

            reader.onload = (e) => {
                SelectedUploadedImage.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });

    const UploadProfileImage = document.querySelector('#UploadProfileImage');

    UploadProfileImage.addEventListener('click', () => {
        if (SelectProfileImage.files.length > 0) {
            const file = SelectProfileImage.files[0];

            // Create FormData object to send the file to the server
            const formData = new FormData();
            formData.append('file', file); // Use 'file' as the key (matching backend)

            // Make a POST request to the server to handle the file upload
            fetch(PHOTOUPLOAD, {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log(data.message);
                        console.log('New file name:', data.newFileName);

                        const USER={
                            "SecretCode":localStorage.getItem('User'),
                            "ProfileImage":data.newFileName
                        }

                        fetch(UPDATEPROFILEIMAGE,{
                            method:'Post',
                            mode:'no-cors',
                            body:JSON.stringify(USER)
                        })

                        .then((result) => {

                            console.log(result)
                            
                        }).catch((err) => {
                            console.log('error',err)
                        });


                        

                    } else {
                        console.error('Error:', data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            alert('No Profile Image Selected');
        }
    });
};

export { UPDATEPROFILEPHOTOPAGE };
