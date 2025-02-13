import kural from '../../img/kural.png'
import jobfinder from '../../img/Jobfinder.jpg'
import kec from '../../img/kec.png'
import notes from '../../img/notes.png'
import Webdev from '../../img/Web dev.png'
import Chatapp from '../../img/ChatApp.png'
import books from '../../img/books.png'
import Water from '../../img/waterfinal2.png'
export const projects = [
    {
      id: 1,
      title: "Kural App",
      description: "A web application that provides an interactive way to explore and learn Thirukkural, featuring categorized verses and an intuitive UI.",
      image: kural,
      tags: ["React", "MongoDB", "Node.js","Express.js","Tailwind css"],
      category: "Full-Stack",
    },
    {
      id: 2,
      title: "NotesApp",
      description: "A full-stack note-taking application with CRUD functionality, allowing users to create, edit, and delete notes efficiently.",
      image: notes,
      tags: ["React", "MongoDB", "Node.js","Express.js","Tailwind css"],
      category: "Full-Stack",
    },
    {
        id: 3,
        title: "GrounoAnalysis",
        description: "A groundwater analysis platform that provides real-time data visualization, AI-based predictions, and water quality insights with a user-friendly interface.",
        image: Water,
        tags: ["React", "MongoDB", "Node.js","Express.js","Python","Gen Ai"],
        category: "Full-Stack",
    },
    {
        id: 4,
        title: "ChatApp",
        description: "A real-time chat application using WebSockets, enabling users to join rooms and communicate seamlessly with others.",
        image: Chatapp,
        tags: ["React", "Node.js","Express.js","Socket.io"],
        category: "Front-end",
    },
    {
        id: 5,
        title: "BookStore App",
        description: "An online bookstore platform where users can browse, search with a smooth UI and backend integration.",
        image: books,
        tags: ["React", "MongoDB", "Node.js","Express.js"],
        category: "Full-Stack",
    },
    {
      id: 7,
      title: "KEC Renaissance Website",
      description: "A dynamic website designed for Kongu Engineering College to showcase events, clubs members ,clubs and student activities.",
      image: kec,
      tags: ["React","CSS"],
      category: "Front-end",
  },
  {
    id: 8,
    description: "A job search platform that helps users find job listings, filter results, and get relevant career opportunities.",
    image: jobfinder,
    tags: ["React","Tailwind css"],
    category: "Front-end",
},
{
  id: 9,
  title: "WebDevApp",
  description: "A web development learning app with interactive tutorials, coding exercises, and resources for beginners.",
  image: Webdev,
  tags: ["React","Tailwind css"],
  category: "Front-end",
}
];
  