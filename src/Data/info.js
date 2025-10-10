import cmr from './cmr.jpg';
import PASS from './PASS.jpg';
import alp from './alp.jpeg';
import Sch from './Sch.jpg';

const info={
    main: {
        name: "VedaPrathik Gattu",
        description: "Motivated Computer Science Engineering student with hands-on experience in innovative projects by applying my expertise in backend development with Spring Boot, frontend technologies like React and Bootstrap, and database management with MySQL. Seeking a Software Engineer role to contribute to innovative projects by leveraging skills in Java, Python, React, Spring Boot, Bootstrap, and MySQL to build scalable and efficient software solutions.",
        role: "Software Engineer",
        image: PASS,
        email: "gattuvedaprathikgoud@gmail.com",
    },

    socials:{
        github:" https://github.com/vedaprathikgattu",
        linkedin: " https://www.linkedin.com/in/gattu-veda-prathik-goud/",
        instagram: "https://www.instagram.com/veda_prathik_/",
    },

    projects: [
        {
            title: "Employee Management System",
			description: "A full-stack web application built to implement complete CRUD operations for managing employee records, featuring a responsive UI and seamless integration between frontend and backend.",
            technologies: "React, Bootsrap, Springboot, MySQL,REST APIs",
            github: "https://vedaprathikgattu.github.io/employee/",
        },

        {
            title: "Grocery Store System",
			description: "This Grocery Store project is a responsive e-commerce website built using HTML,CSS, JavaScript, and Bootstrap, featuring product categories, customer reviews, and blogs. It includes interactivefunctions like add-to-cart, product search, dynamic cart updates, and login form toggles for a complete shoppingexperience.",
            technologies: "Html, Css, JavaScript, Bootstrap",
            github: "https://vedaprathikgattu.github.io/gsp/",
        },
        {
            title: "Simple Calculator",
			description: "A calculator program using HTML, CSS, and JavaScript performs basic arithmetic operations interactively.HTML builds the structure, CSS styles the interface, and JavaScript handles the logic and calculations.It is a simple yet effective project to understand the fundamentals of web development.",
            technologies: "Html, Css, JavaScript",
            github: "https://vedaprathikgattu.github.io/calculator/",
        },

        {
            title: "Dice Game",
			description: "A Dice Game built with HTML, CSS, and JavaScript is a fun web project where two players roll dice and the program decides the winner.HTML creates the structure with dice images and buttons, CSS styles the layout for an engaging look, and JavaScript generates random dice values, updates the dice faces, and displays the winner.This project demonstrates event handling, randomness, and DOM manipulation in web development.",
            technologies: "Html, Css, JavaScript",
            github: "https://vedaprathikgattu.github.io/DiceGames/",
        },
        {
            title: "Nteflix-Home",
			description: "A Netflix Home Page clone created with HTML and CSS is a front-end web project that replicates the look and feel of Netflix’s landing page.HTML provides the structure, including the navigation bar, banner section, movie thumbnails, and footer.CSS styles these elements with layouts, background images, hover effects, and responsive design, making it visually appealing and similar to the original Netflix interface.",
            technologies: "Html, Css",
            github: "https://vedaprathikgattu.github.io/Netflix-Home/",
        },
    ],

    education:[
        {
            school: "CMR Institute of Technology, Hyderabad",
            degree: "Bachelor of Science in Computer Science - 7.35 CGPA",
            duration: "2021 - 2025",
            image: cmr,
        },

        {
            school: "Alphores Junior College",
            degree: "Intermediate - Mathematics Physics Chemistry (MPC) - 74%",
            duration: "2019 - 2021",
            image: alp,
        },

        {
            school: "Vishwashanthi Hgh School",
            degree: "Secondary Education - 9.0 CGPA",
            duration: "2018 - 2019",
            image: Sch,
        },
    ],
    
    certificates: [
        {
            title:"Python",
            description: "Provided by HackerRank",
            icon: "hacker",
            link: "https://drive.google.com/file/d/19nHY0Te50OuC1-BSYxvTjv6oUL7hQ3gE/view",
        },

        {
            title:"Java",
            description: "Provided by Infosys",
            icon: "infosys",
            link: "https://drive.google.com/file/d/1RIKhmkq9FZsR4oDhiEqnUsMI9w1wfCC3/view",
        },

        {
            title:"Full Stack Java Development",
            description: "Provided by SimpliLearn",
            icon: "simpli",
            link: "https://drive.google.com/file/d/1VJGCVHzLEAOYZE947CkwrYTKCWJDEuKz/view",
        },

        {
            title: "Smart Coder (DSA)",
            description: "Provided by Smart Interviews",
            icon: "smart",
            link: "https://drive.google.com/file/d/1ldkY35g-Hq6xPNLcTYnuV27DTWIc8Ty8/view",
        },

        {
            title: "HTML and CSS",
            description: "Provided by Udemy",
            icon: "udemy",
            link: "https://drive.google.com/file/d/1aAtnDRH5ozH9i6XS4NQb66qT_tcpYxwZ/view?usp=sharing",
        },

        {
            title: "Bootstrap",
            description: "Provided by Udemy",
            icon: "udemy",
            link: "https://drive.google.com/file/d/1Cj_FBtNXgKJ-31fWewukEdX9VaLTjivt/view?usp=sharing",
        },

        {
            title: "Java Script",
            description: "Provided by Udemy",
            icon: "udemy",
            link: "https://drive.google.com/file/d/1y7gh4hxy38KZFh8WQD4_ATEeiG_MXHcE/view?usp=sharing",
        },

    ],

    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at vittu3003@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    footer: "© 2025 Pavan Vasam. All Rights Reserved"
}
export default info;
