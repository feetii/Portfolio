export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Master's student in Information Systems Security",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    position: [1, 2, 3], // Example position array
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    position: [1, 2], // Add position if applicable
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    position: [2, 3], // Add position if applicable
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    position: [3, 4], // Add position if applicable
  },
  {
    id: 5,
    title: "Currently learning Next.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    position: [4, 5], // Add position if applicable
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    position: [5, 6], // Add position if applicable
  },
];export const projects = [
  {
    id: 1,
    title: "Food Delivery Mobile App",
    des: "Streamline food delivery with an intuitive app and real-time tracking.",
    img: "/food-delivery.png",
    iconLists: ["/flutter.svg", "/firebase.svg", "/map.svg", "/dart.svg"],
    link: "https://github.com/feetii/jibleyy",
  },
  {
    id: 2,
    title: "Responsive E-Learning Platform",
    des: "An interactive platform offering a variety of courses for learners.",
    img: "/elearning-platform1.png",
    iconLists: ["/css.svg", "/html.svg", "/js.svg", "/firebase.svg", "/mongodb.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Stock Management Mobile App",
    des: "Manage inventory and sales for a paint shop with analytics features.",
    img: "/stock-management.png",
    iconLists: ["/java.svg", "/xml.svg", "/firebase.svg", "/chart.svg"],
    link: "https://github.com/feetii/GS_peinture",
  },
  {
    id: 4,
    title: "Responsive E-commerce Website for Mobiles and PCs",
    des: "Seamless shopping experience for mobile phones and PCs with secure payments.",
    img: "/ecommerce-website.png",
    iconLists: ["/react.svg", "/next.svg", "/ts.svg", "/tail.svg", "/mongodb.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Fethi was an incredible experience! His ability to understand our vision and translate it into a functional website exceeded our expectations. His attention to detail and creativity made a significant difference in our project.",
    name: "Sofia Benali",

  },
  {
    quote:
      "Fethi brought our project to life with his innovative approach and technical expertise. He was always ready to offer solutions and went above and beyond to ensure our satisfaction. Highly recommend his services!",
    name: "Youssef Hadj", 
    title: "Responsable Marketing de Digital Solutions",
  },
  {
    quote:
      "Fethi's dedication to quality and client satisfaction is unmatched. He took the time to understand our needs and delivered a product that truly represents our brand. I couldn't be happier with the results!",
    name: "Nadia Rahmani", 
    title: "Chef de Projet chez NextGen Technologies",
  },
  {
    quote:
      "Collaborating with Fethi was a game-changer for our company. His professionalism and technical skills transformed our website into a powerful marketing tool. I wholeheartedly recommend him to anyone looking for web development expertise.",
    name: "Khaled Boumediène",
  
  },
  {
    quote:
      "Fethi was a pleasure to work with. His insightful feedback and collaborative spirit made the development process seamless. The end product surpassed our expectations and has made a huge impact on our business.",
    name: "Amina Djemili",
    title: "Directrice de Communication de Creative Labs",
  },
];

export const companies = [
  {
    id: 1,
    name: "Sonatrach",
    img: "/sonatrach.svg",
    nameImg: "Sonatrach",
  },
  {
    id: 2,
    name: "Jibley",
    img: "/jibley.png",
    nameImg: "Jibley",
  },
];

export const workExperience = [
  {
    id:1,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev ",
    desc: "Designed and developed mobile app  Android platforms using Flutter or Java.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4, // New entry for Web App Developer
    title: "Web App Developer",
    desc: "Designed and developed web applications with a focus on user experience and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg", // Add the corresponding image path
  },
  
 
];

export const socialMedia = [
  {
    id: 1,
    link:"https://github.com/feetii",
    img: "/git.svg",
  },

  {
    id:2,
    link:"https://www.linkedin.com/in/fethi-soualma-b32945231/?originalSubdomain=dz",
    img: "/link.svg",
  },
];
