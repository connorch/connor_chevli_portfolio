const skillTypes = {
  frontend: {
    id: "frontend",
    group: "stack",
  },
  backend: {
    id: "backend",
    group: "stack",
  },
};

const { frontend, backend } = skillTypes;

const skills = [
  {
    name: "JavaScript (ES9)",
    types: { frontend, backend },
  },
  {
    name: "React",
    types: { frontend },
  },
  {
    name: "React-Native",
    types: { frontend },
  },
  {
    name: "PHP",
    types: { backend },
  },
  {
    name: "Redux",
    types: { frontend },
  },
  {
    name: "NodeJS",
    types: { backend },
  },
  {
    name: "Dart",
    types: { frontend },
  },
  {
    name: "Flutter",
    types: { frontend },
  },
  {
    name: "ExpressJS",
    types: { backend },
  },
  {
    name: "GraphQL",
    types: { frontend, backend },
  },
  {
    name: "D3",
    types: { frontend },
  },
  {
    name: "Gulp",
    types: { backend },
  },
  {
    name: "Vue.js",
    types: { frontend },
  },
  {
    name: "Expo",
    types: { frontend },
  },
  {
    name: "Web3",
    types: {backend, frontend},
  },
  {
    name: "AWS ECS",
    types: {},
  },
  {
    name: "Firebase",
    types: { backend },
  },
  {
    name: "AngularJS",
    types: { frontend },
  },
  {
    name: "Perl",
    types: { backend },
  },
  {
    name: "Koa",
    types: { backend },
  },
  {
    name: "HTML5",
    types: { frontend },
  },
  {
    name: "CSS",
    types: { frontend },
  },
  {
    name: "Redis",
    types: { backend },
  },
  {
    name: "Vite",
    types: { frontend },
  },
  {
    name: "Webpack",
    types: { frontend },
  },
  {
    name: "SASS",
    types: { frontend },
  },
  {
    name: "SQL",
    types: { backend },
  },
  {
    name: "jQuery",
    types: { frontend },
  },
  {
    name: "MongoDB",
    types: { backend },
  },
  {
    name: "Memcached",
    types: { backend },
  },
  {
    name: "Sketch",
    types: { frontend },
  },
  {
    name: "AdobeXD",
    types: { frontend },
  },
];

export { skills, skillTypes };
