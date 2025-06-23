import '../components-css/Projects.css'
import  Analysis from "../images/analysis.svg"
import Dashboard from "../images/dashboard.svg"
import  Excel from "../images/excel.svg"
function Projects(){
    return(
        <div id="projects">
            <h1>Projects</h1>
            <div class="cards-projects">
                <div id="project1">
                    <img src={Analysis}></img>
                    <div class="container">
                        <h4><b>Sales Performance</b></h4>
                        <p>Analyzed monthly sales data using Excel to identify top-performing products and regional trends. Built a dynamic dashboard with pivot tables and interactive charts for business insights.</p>
                    </div>
                </div>
                <div id="project2">
                    <img src={Dashboard}></img>
                    <div className="container">
                        <h4><b>Customer Behavior</b></h4>
                        <p>Processed and cleaned e-commerce data to uncover customer purchasing patterns. Used Python and Pandas for analysis, revealing key factors influencing customer loyalty and churn.</p>
                    </div>
                </div>
                <div id="project3">
                    <img src={Excel}></img>
                    <div className="container">
                        <h4><b>Job Market Trends</b></h4>
                        <p>Queried a public job postings database using SQL to explore trends in tech job demand. Focused on keywords, locations, and salary patterns to support career decision-making.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Projects;