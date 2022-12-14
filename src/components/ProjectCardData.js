import todo from "../assets/todo.png";
import keeper from "../assets/keeper.png";
import textutil from "../assets/textutil.png";

const ProjectCardData = [
  {
    imgURL: todo,
    title: "ToDo App",
    desc: "This is a todo list app where you can easily add and remove your ToDos. This is also connected with MongoDb cloud for Database so that your ToDos will be saved. Also, you can create your custom title ToDo just by putting /title-name in URL.",
    view: "https://radiant-retreat-01167.herokuapp.com/",
    source: "https://github.com/pathekarharsh/todolist-database",
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
    title: "TextUtil App",
    desc: "In TextUtil you can do various fun things with Text. You can convert text to Uppercase, Lowercase also you can Copy and Clear Text. This is also a Project based on React. Best Thing that I've added in this is that you can Enable DarkMode in this.",
    view: "https://pathekarharsh.github.io/react-textutils/",
    source: "https://github.com/pathekarharsh/react-textutils",
  },
];

export default ProjectCardData;
