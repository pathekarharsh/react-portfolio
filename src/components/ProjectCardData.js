import todo from "../assets/todo.png";
import keeper from "../assets/keeper.jpg";
import textutil from "../assets/textutil.jpg";
import nike from "../assets/nike.jpg";
import gpt from "../assets/gpt.jpg";
import pano from "../assets/pano.jpg";

const ProjectCardData = [
  {
    imgURL: nike,
    title: "Nike-ui",
    desc: " A sleek and minimalist React-based UI project inspired by Nike's design. Inspired by Nike's design principles, it delivers a clean and captivating interface that not only looks great but also ensures a user-friendly and visually delightful journey",
    view: "https://earnest-melba-9d8054.netlify.app/",
    source: "https://github.com/pathekarharsh/nike-ui",
  },
  {
    imgURL: todo,
    title: "ToDo App",
    desc: "This is a todo list app where you can easily add and remove your ToDos. This is also connected with MongoDb cloud for Database so that your ToDos will be saved. Also, you can create your custom title ToDo just by putting /title-name in URL.",
    view: "https://radiant-retreat-01167.herokuapp.com/",
    source: "https://github.com/pathekarharsh/todolist-database",
  },
  {
    imgURL: gpt,
    title: "OpenAi-ui",
    desc: "Embark on my dynamic React-based UI journey, a fusion of creativity inspired by OpenAI. It's a visual masterpiece that brilliantly combines design elegance with the flexibility of React, offering an immersive and interactive user experience.",
    view: "https://www.linkedin.com/posts/harsh-pathekar-42b7971b8_project-ui-openai-activity-7095691803139477504-FuyJ?utm_source=share&utm_medium=member_desktop",
    source: "https://github.com/pathekarharsh/openAI-ui",
  },
  {
    imgURL: pano,
    title: "Panorama-Viewer",
    desc: "Panorama Viewer: Experience the world in 360 degrees with our simple yet immersive project. Upload your panoramic images, powered by the Pano Lens library, and step into a breathtaking visual journey. This is a Javascript based project.",
    view: "https://pathekarharsh.github.io/panorama-viewer/",
    source: "https://github.com/pathekarharsh/panorama-viewer",
  },
  {
    imgURL: keeper,
    title: "Keeper App",
    desc: "Keeper is a place where you can store your import notes with Title and Description and also you can Delete that Note whenever you want. This is created using React Framework. Checkout the source Code from SOURCE and view it from WEBSITE.",
    view: "https://pathekarharsh.github.io/keeperApp/",
    source: "https://github.com/pathekarharsh/keeperApp",
  },
  {
    imgURL: textutil,
    title: "Text-Utils",
    desc: "In TextUtil you can do various fun things with Text. You can convert text to Uppercase, Lowercase also you can Copy and Clear Text. This is also a Project based on React. Best Thing that I've added in this is that you can Enable DarkMode in this.",
    view: "https://pathekarharsh.github.io/react-textutils/",
    source: "https://github.com/pathekarharsh/react-textutils",
  },
];

export default ProjectCardData;
