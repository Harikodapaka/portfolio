import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

function Projects() {
    return (
        <section className="section-padding full-height bg-warning" id="projects">
            <div >
                <h1>Projects</h1>
                <div>
                    <ProjectCard />
                </div>
            </div>
        </section>
    );
}

export default Projects;
