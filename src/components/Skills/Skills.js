import './Skills.css';
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GetImage from './ImageHelper';

function Skills() {
    const skills = {
        "front-end-skills": [
            { name: "HTML 3", img: "html", percent: "90", color: "success" },
            { name: "CSS 5", img: "css", percent: "90", color: "warning" },
            { name: "Bootstrap", img: "bootstrap", percent: "90", color: "info" },
            { name: "Angular", img: "angular", percent: "90", color: "warning" },
            { name: "Angular JS", img: "angular", percent: "90", color: "danger" },
            { name: "React", img: "react", percent: "70", color: "success" },
            { name: "Typescript", img: "ts", percent: "80", color: "info" },
            { name: "jQuery", img: "jquery", percent: "80", color: "warning" },
            { name: "SASS", img: "sass", percent: "80", color: "success" },
        ],
        "back-end-skills": [
            { name: "Node JS", img: "node", percent: "90", color: "success" },
            { name: "Dot Net Core", img: "dnet", percent: "90", color: "success" },
            { name: "Java", img: "java", percent: "90", color: "success" },
            { name: "SQL", img: "sql", percent: "90", color: "success" },
            { name: "Mongo DB", img: "mongo", percent: "90", color: "success" },
        ],
        "other-skills": [
            { name: "AWS", img: "aws", percent: "90", color: "success" },
            { name: "Azure", img: "azure", percent: "90", color: "success" },
            { name: "GIT", img: "git", percent: "90", color: "success" },
            { name: "Docker", img: "docker", percent: "90", color: "success" },
            { name: "System Design", img: "sys-design", percent: "70", color: "success" },
            { name: "Design Patterns", img: "design-pattern", percent: "80", color: "success" },
        ]
    };
    return (
        <section className="section-padding bg-secondary text-white">
            <Container fluid="md">
                <h1>
                    Technologies I know
                </h1>
                <Carousel variant="light" controls={true} indicators={false} interval={null}>
                    <Carousel.Item className="p-5" style={{ minHeight: "20em" }}>
                        <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                            {skills["front-end-skills"].map((skill, i) => (
                                <Col key={i}>
                                    <div className="d-flex align-items-center">
                                        <span className="col-3 col-md-5 text-center icon">
                                            {GetImage(skill.img)}
                                        </span>
                                        <ProgressBar className="col-9 col-md-7" now={skill.percent} label={skill.name} variant={skill.color} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5" style={{ minHeight: "20em" }}>
                        <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                            {skills["back-end-skills"].map((skill, i) => (
                                <Col key={i}>
                                    <div className="d-flex align-items-center">
                                        <span className="col-3 col-md-5 text-center icon">
                                            {GetImage(skill.img)}
                                        </span>
                                        <ProgressBar className="col-9 col-md-7" now={skill.percent} label={skill.name} variant={skill.color} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5" style={{ minHeight: "20em" }}>
                        <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                            {skills["other-skills"].map((skill, i) => (
                                <Col key={i}>
                                    <div className="d-flex align-items-center">
                                        <span className="col-3 col-md-5 text-center icon">
                                            {GetImage(skill.img)}
                                        </span>
                                        <ProgressBar className="col-9 col-md-7" now={skill.percent} label={skill.name} variant={skill.color} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}
export default Skills;
