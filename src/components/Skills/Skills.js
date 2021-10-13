import './Skills.css';
import { Carousel } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import GetImage from './ImageHelper';

function Skills() {
    const skills = {
        "front-end-skills": [
            { name: "HTML 3", img: "html", percent: "90", iconColor: "#dc4922" },
            { name: "CSS 5", img: "css", percent: "90", iconColor: "#136EB0" },
            { name: "Bootstrap", img: "bootstrap", percent: "90", iconColor: "#533B77" },
            { name: "Angular", img: "angular", percent: "90", iconColor: "#DA3135" },
            { name: "Angular JS", img: "angular", percent: "90", iconColor: "#DA3135" },
            { name: "React", img: "react", percent: "70", iconColor: "00D1F6" },
            { name: "JavaScript", img: "js", percent: "80", iconColor: "#EFD81A" },
            { name: "jQuery", img: "jquery", percent: "80", iconColor: "#0964A7" },
            { name: "SASS", img: "sass", percent: "80", iconColor: "#C66394" },
        ],
        "back-end-skills": [
            { name: "Node JS", img: "node", percent: "80", iconColor: "#56A143" },
            { name: "Dot Net Core", img: "dnet", percent: "70", iconColor: "#1985C9" },
            { name: "Java", img: "java", percent: "50", iconColor: "#0986C1" },
            { name: "SQL", img: "sql", percent: "70", iconColor: "#D93628" },
            { name: "Mongo DB", img: "mongo", percent: "70", iconColor: "#4EA53F" },
        ],
        "other-skills": [
            { name: "AWS", img: "aws", percent: "50", iconColor: "#F79400" },
            { name: "Azure", img: "azure", percent: "60", iconColor: "#226EB4" },
            { name: "GIT", img: "git", percent: "85", iconColor: "#E94F31" },
            { name: "Docker", img: "docker", percent: "55", iconColor: "#27B2E5" },
            { name: "System Design", img: "sys-design", percent: "80", iconColor: "#6F42C1" },
            { name: "Design Patterns", img: "design-pattern", percent: "80", iconColor: "#19A279" },
        ]
    };
    return (
        <section className="section-padding">
            <Container fluid="md">
                <h1 className="text-white"> Technologies I know </h1>
                <Carousel className="mt-3 card" variant="dark" controls={false} indicators={true} interval={2000} pause={false}>
                    <Carousel.Item className="mt-3 p-5" style={{ minHeight: "25em" }}>
                        <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                            {skills["front-end-skills"].map((skill, i) => (
                                <Col key={i}>
                                    <div className="d-flex align-items-center">
                                        <span className="col-3 col-md-5 text-center icon">
                                            {GetImage(skill.img, skill.iconColor)}
                                        </span>
                                        <ProgressBar className="col-9 col-md-7" now={skill.percent} label={skill.name} variant={skill.img} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Carousel.Caption>
                            <h3>Frontend Skill</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="mt-3 p-5" style={{ minHeight: "25em" }}>
                        <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                            {skills["back-end-skills"].map((skill, i) => (
                                <Col key={i}>
                                    <div className="d-flex align-items-center">
                                        <span className="col-3 col-md-5 text-center icon">
                                            {GetImage(skill.img, skill.iconColor)}
                                        </span>
                                        <ProgressBar className="col-9 col-md-7" now={skill.percent} label={skill.name} variant={skill.img} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Carousel.Caption>
                            <h3>Backend Skill</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="mt-3 p-5" style={{ minHeight: "25em" }}>
                        <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                            {skills["other-skills"].map((skill, i) => (
                                <Col key={i}>
                                    <div className="d-flex align-items-center">
                                        <span className="col-3 col-md-5 text-center icon">
                                            {GetImage(skill.img, skill.iconColor)}
                                        </span>
                                        <ProgressBar className="col-9 col-md-7" now={skill.percent} label={skill.name} variant={skill.img} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Carousel.Caption>
                            <h3>Other Skill</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}
export default Skills;
