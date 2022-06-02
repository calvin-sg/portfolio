// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #808080, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hi 👋 I'm ",
  middleName: "",
  lastName: "Calvin",
  message: " Software Engineer. Enthusiastic learner. ",
  
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/calvin-sg",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/calvin-loh",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./me.jpg"),
  imageSize: 250,
  messages:  ["I seek an practical experiences where opportunities for learning are actively up for grabs. I am grateful for each challenge, presenting itself as a valuable learning opportunity."],
  resume: require("../editable-stuff/Resume_Calvin.pdf"),
};

const career = {
  show: true,
  heading: "Career",
  lists: [
    {
      CompanyName: "Sopra Steria Asia Pte. Ltd.",
      Address: "Fusionopolis, one-north business park, Singapore",
      Title: "Temporary Java Software engineer",
      Time: "Jun 2021 - Sep 2021",
      Descriptions: [
          "Paired with a senior colleague with tasks within development and testing phases of iterative-based software development lifecycle, with on-job learning experience as a priority"
      ],
      TechStack: ["Object-oriented Java, IBM Operational Decision Manager, mySQL, Jira, Git, GitLab, MobaXterm, Eclipse"],
    }
  ]
};
const education = {
  show: true,
  heading: "Education",
  lists: [
    {
      university: "University of London, SIM Global Education",
      degree: "Bachelor of Science Computing and Information Systems",
      time: "Sep 2019 - May 2022",
      description:""
    },
    {
      university: "Yishun Junior College",
      degree: "GCE Advanced Level",
      time: "Jan 2016 - Dec 2017",
      description: ""
    }
]
};

const onlineWritings = {
  show: true,
  heading: "My published works",
  quote: {
    text: "Stay hungry stay foolish",
    by:"Steve Jobs"
  },
   list: [
     {
      title: "Stomp out Dengue community service event",
      url: "https://web.archive.org/web/20210309074708/https://yolk16.rssing.com/chan-9426123/article142.html",
      description: "Student press coverage of ground-up initiative to fight dengue in Singapore",
     },
     {
      title:"Inter-school Debates competition",
      url: "https://web.archive.org/web/20150328034404/http://discover-nyp.blogspot.sg/2014/07/stomp-out-dengue-carnival-2014-touches.html",
      description: "Student press coverage of a fierce debates competition, represented by student debate teams from the various faculties of Nanyang Polytechnic"
     }
  ]

};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "calvin-sg", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "contact Me",
  message:
    "Drop me a mail or just to say hi",
  email: "hello [at] calvin.sg",
};

export { 
  navBar, mainBody, about, getInTouch,
  career,education , onlineWritings, repos};