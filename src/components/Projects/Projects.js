import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { BsGithub } from "react-icons/bs";

const cardDetails = [{
    title: "Project 1",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    links: [{
        href: "https://getbootstrap.com/docs/5.1/components/card/",
        icon: "GitHub",
    }],
},
{
    title: "Project 1",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    links: [{
        href: "https://getbootstrap.com/docs/5.1/components/card/",
        icon: "GitHub",
    }],
},
{
    title: "Project 1",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    links: [{
        href: "https://getbootstrap.com/docs/5.1/components/card/",
        icon: "GitHub",
    }],
},
{
    title: "Project 1",
    body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    links: [{
        href: "https://getbootstrap.com/docs/5.1/components/card/",
        icon: "GitHub",
    },{
        href: "https://getbootstrap.com/docs/5.1/components/card/",
        icon: "Open",
    }],
}]
function Projects() {
    return (
        <section className="section-padding bg-warning" id="projects">
            <Container fluid="md">
                <h1>Projects</h1>
                <Row>
                    {cardDetails.map((card, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-2" key={i}>
                            <ProjectCard title={card.title} body={card.body} links={card.links}/>
                        </div>
                    ))}
                </Row>
                <Row>
                    <Button className="col-md-3 mx-auto"><span className="m-2">More on</span> <BsGithub /></Button>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
