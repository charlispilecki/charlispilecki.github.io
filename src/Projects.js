import Project from './Project'
import FeaturedProject from './FeaturedProject'

export default function Projects() {
    return (
        <div>
        <FeaturedProject name="Monnaie" url="https://salty-forest-71574.herokuapp.com/"
            img="img/MonnaieProjectTwo.png" 
            github="https://github.com/kccho2254/monnaie"
            tech="JavaScript, Node, Express, MySQL, Sequelize, Bulma, Dinero.js, Chart.js, etc."
            >
        </FeaturedProject>
        <FeaturedProject name="Served" url="https://chad1281.github.io/served"
            img="img/ServedScreenshot.png" 
            github="https://github.com/Chad1281/served"
            tech="JavaScript, JQuery, JSON, Bulma, REST APIs, and more"
            >
        </FeaturedProject>
        
        <div className="row" id="projects">

            <Project name="Book List" url="https://burgers-books.herokuapp.com/" 
                github="https://github.com/charlispilecki/HW_13_Node_Express_Handlebars" 
                img="img/Burgers_Books_List.png"
                tech="Javascript, Node, MySQL, Express, Heroku, Bulma, JawsDB, and more" >
            </Project>  
            <Project name="Coding Quiz" url="https://charlispilecki.github.io/HW_4_Code_Quiz/" 
                github="https://github.com/charlispilecki/HW_4_Code_Quiz" 
                img="img/CodingQuizScreenshot.png"
                tech="JavaScript, HTML, CSS, Bootstrap, and more" >
            </Project>  
            <Project name="Work Day Scheduler" url="https://charlispilecki.github.io/HW_5_Work_Day_Scheduler/" 
                github="https://github.com/charlispilecki/HW_5_Work_Day_Scheduler" 
                img="img/WorkDaySchedulerScreenshot.png"
                tech="JavaScript, Moment.js, Bootstrap, local storage, and more" >
            </Project>  
            <Project name="Weather Dashboard" url="https://charlispilecki.github.io/HW_6_Weather_Dashboard/" 
                github="https://github.com/charlispilecki/HW_6_Weather_Dashboard" 
                img="img/WeatherDashboardScreenshot.png"
                tech="JavaScript, REST APIs, Bootstrap, local storage, and more" >
            </Project>  
            <Project name="Note Taker" url="https://some-app-that-takes-notes.herokuapp.com/" 
                github="https://github.com/charlispilecki/HW_11_Note_Taker" 
                img="img/NoteTaker.png"
                tech="JavaScript, Node, Express, AJAX, Heroku" >
            </Project>  
            <Project name="Employee Directory" url="https://charlispilecki.github.io/HW_19_Employee_Directory/" 
                github="https://github.com/charlispilecki/HW_19_Employee_Directory" 
                img="img/EmployeeDirectoryScreenshot.png"
                tech="React, Javascript, JSON, Bulma" >
            </Project>
        
        </div>
        </div>
    )
}