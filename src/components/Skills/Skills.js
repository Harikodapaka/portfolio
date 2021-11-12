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
                    <Carousel className="mt-3 card carousel-fade" variant="dark" controls={false} indicators={true} interval={2000} pause={false}>
                        {skill_catrgories.map((skillType, i) => (
                            <Carousel.Item key={i} className="mt-3 p-3" style={{ minHeight: "25em" }}>
                                <div className="display-6 text-center">{skillType.fields.name}</div>
                                <hr/>
                                <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center">
                                    {skillType.fields?.skills?.map((skill, i) => (
                                        <Col key={i}>
                                            <div className="d-flex align-items-center">
                                                <span className="col-3 col-md-4 text-center icon">
                                                    {GetImage(skill?.fields?.img, skill?.fields?.iconColor)}
                                                </span>
                                                <ProgressBar className="col-9 col-md-7" now={skill?.fields?.percent} label={skill?.fields?.name} variant={skill?.fields?.img} />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
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
        fields: PropTypes.shape({
            title: PropTypes.string,
            skills: PropTypes.arrayOf(PropTypes.shape({
                fields: PropTypes.shape({
                    name: PropTypes.string,
                    img: PropTypes.string,
                    percent: PropTypes.string,
                    iconColor: PropTypes.string
                })
            }))
        })
    })).isRequired
};
Skills.defaultProps = {
    title: "",
    skill_catrgories: [{ fields: {} }]
}
export default Skills;
