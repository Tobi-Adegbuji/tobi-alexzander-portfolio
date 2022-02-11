


let Project = class {
    constructor(name, image, about, technologies, githubLink) {
        this.name = name; 
        this.image = image;
        this.about = about; 
        this.technologies = technologies;
        this.githubLink = githubLink; 
    }
};

const projects = [
    new Project(
        'Netflix Clone',
        'https://raw.githubusercontent.com/Tobi-Adegbuji/react-movie-streamz/master/movie-streamz.PNG',
        'An app that utilizes the IMBD API to display movies in a netflix-like UI.',
        ['React.js','Axios','CSS3','HTML5'],
        'https://github.com/Tobi-Adegbuji/react-movie-streamz'
    ),
    new Project(
        'Spring Recipes',
        'https://raw.githubusercontent.com/Tobi-Adegbuji/spring-recipe-project/master/readme/homepage.PNG',
        'An app that utilizes the IMBD API to display movies in a netflix-like UI.',
        ['React.js','Axios','CSS3','HTML5'],
        'https://github.com/Tobi-Adegbuji/react-movie-streamz'
    ),
    new Project(
        'Edge Express (Bus Reservation)',
        'https://raw.githubusercontent.com/Tobi-Adegbuji/Bus_Application_CIS3270/master/BusAppCIS/BusImages/LoginScreenReadMe.PNG',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ['React.js','Axios','CSS3','HTML5'],
        'https://github.com/Tobi-Adegbuji/react-movie-streamz'
    ),
    new Project(
        'Web Diaries (Full Stack)',
        'https://raw.githubusercontent.com/Tobi-Adegbuji/diary-app/master/about/app.PNG',
        'An app that utilizes the IMBD API to display movies in a netflix-like UI.',
        ['React.js','Axios','CSS3','HTML5'],
        'https://github.com/Tobi-Adegbuji/react-movie-streamz'
    )
]; 


export default projects; 