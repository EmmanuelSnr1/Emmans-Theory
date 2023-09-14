// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Emmanuel",
  middleName: "",
  lastName: "Appiah (Snr)",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/emmanuelSnr1",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/appiah.emmanuel.125",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/emanuel_snr1",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/emmanuelsnr12",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Emmanuel.jpeg"),
  imageSize: 375,
  message:
    "Hello! I'm Emmanuel, a passionate tech enthusiast with a rich background in Computer Science and Business from Aston University, where I graduated with first-class honours. My journey in the tech world has been diverse and enriching, from honing my software engineering skills at a dynamic fintech startup, Jacobi Strategies in London, to diving deep into Java development, and even dabbling in self-hosted WordPress solutions, especially with WP Engine. Whether I'm working on plugin development, designing pages, or mastering Java EE and SQL, I approach every challenge with a keen eye for detail and a drive for excellence. As I further my expertise with an MSc in Artificial Intelligence, I'm eager to bring my versatile skillset and innovative spirit to transformative projects. Let's collaborate and turn visionary ideas into tangible solutions!",
  resume: "https://drive.google.com/file/d/11JWJKWD_ikhYIvu2G8U00If-lC3AJfto/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "EmmanuelSnr1", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Emmanuel.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Emmanuel.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "PHP Wordpress Design & Plugin Dev", value: 95 },
    { name: "Data Structures", value: 85 },
    { name: "Hardware Maintanance & Support ", value: 85 },
    { name: "Java EE - Springboot/Struts 2", value: 80 },
    { name: "JavaScript - Jquery", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 85 },
    { name: "Adobi XD UI & UX", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 75 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "emmanuelappiah124@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Associate Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/jacobi1.png'),
      date: 'July 2023 – August 2022',
    },
    {
      role: 'Exports Clearance Broker (L6)',
      companylogo: require('../assets/img/Fedex.png'),
      date: 'November 2020 – August 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
