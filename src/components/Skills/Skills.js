import './Skills.css';
import { Carousel } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import GetImage from './ImageHelper';
import PropTypes from 'prop-types';


function Skills(props) {
    const {
        title,
        skill_catrgories
    } = props;
    return (
        <section className="section-padding">
            <Container fluid="md">
                <h1 className="text-white"> {title} </h1>
                {skill_catrgories &&
                    <Carousel className="mt-3 card" variant="dark" controls={false} indicators={true} interval={2000} pause={false}>
                        {skill_catrgories.map((skillType, i) => (
                            <Carousel.Item key={i} className="mt-3 p-5" style={{ minHeight: "25em" }}>
                                <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                                    {skillType['skills'].map((skill, i) => (
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
                                    <h3>{skillType.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                }
            </Container>
        </section>
    );
}

Skills.propTypes = {
    title: PropTypes.string.isRequired,
    skill_catrgories: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            percent: PropTypes.string.isRequired,
            iconColor: PropTypes.string.isRequired
        }))
    })),
};
export default Skills;
