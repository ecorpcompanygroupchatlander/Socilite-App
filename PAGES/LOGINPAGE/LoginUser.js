import { LOGINAPI } from "../../APIS/SociliteApp.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const LOGINUSER = (DIV) => {

    // INIT SECTION
    const MESSAGE = document.querySelector('.LogInMessage');
    const EMAIL = document.querySelector('#LoginEmail');
    const PASSWORD = document.querySelector('#LoginPassword');
    const LOGINBUTTON = document.querySelector('#LoginButton');

    if (EMAIL.value && PASSWORD.value) {

        LOGINBUTTON.innerHTML = `

        <img class='LoadingIcon' src='./IMAGES/Icons/loading.png'/>

        `;

        // Perform a GET request to retrieve user data
        fetch(LOGINAPI)

            .then(res => res.json())

            .then((data) => {

                const user = data.find(user => user.Email === EMAIL.value);

                if (user) {

                    // Assuming 'user.Password' is the hashed password stored in the database
                    // You should replace 'user.Password' with the actual field name in your data
                    const hashedPassword = user.Password;

                    // Use your hashPassword function to hash the input password
                    hashPassword(PASSWORD.value)

                        .then((hashedUserInput) => {

                            if (hashedUserInput === hashedPassword) {

                                localStorage.setItem('User',user.SecretCode);
                                
                                // Add logic for successful login, e.g., redirect to homepage
                                HOMEPAGE(DIV);

                            } else {
                                
                                localStorage.removeItem('User');

                                MESSAGE.innerHTML = 'Invalid email or password';

                                setTimeout(() => {

                                    MESSAGE.innerHTML = '';

                                    LOGINBUTTON.innerHTML = 'Login';

                                }, 2000);

                            }

                        })

                        .catch((err) => {

                            console.error(err);

                            MESSAGE.innerHTML = 'Something Went Wrong';

                            setTimeout(() => {

                                MESSAGE.innerHTML = '';

                            }, 2000);

                        });

                } else {

                    alert('Not Found');

                    MESSAGE.innerHTML = 'Invalid email or password';

                    setTimeout(() => {

                        MESSAGE.innerHTML = '';

                        LOGINBUTTON.innerHTML = 'Login';

                    }, 2000);

                }

            })

            .catch((err) => {

                console.error(err);

                MESSAGE.innerHTML = 'Something Went Wrong';

                setTimeout(() => {

                    MESSAGE.innerHTML = '';

                }, 2000);

            });

    } else {

        MESSAGE.innerHTML = 'Fill all Parts';

        setTimeout(() => {

            MESSAGE.innerHTML = '';

        }, 2000);
    }
};

// Function to hash a raw password using the same algorithm and parameters used during registration
const hashPassword = async (password) => {

    const encoder = new TextEncoder();

    const data = encoder.encode(password);

    try {

        const buffer = await crypto.subtle.digest('SHA-256', data);

        const hashedArray = Array.from(new Uint8Array(buffer));

        const hashedPassword = hashedArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        return hashedPassword;

    } catch (error) {

        console.error('Error hashing password:', error);

        throw error;

    }
    
};

export { LOGINUSER };
