import './Projects.css';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import * as ReactFaIcons from 'react-icons/fa'


const Icon = ({ name }) => {
    const TagName = ReactFaIcons[name];
    return !!TagName ? <TagName /> : <p>{name}</p>;
}
function Projects(props) {
    const {
        title,
        projects,
        more_projects_link
    } = props;
    return (
        <section className="section-padding">
            <Container fluid="md">
                <h1 className="text-white">{title}</h1>
                <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1">
                    {projects && projects.map((project, i) => (
                        <Col key={i}>
                            <ProjectCard title={project?.fields?.title} body={project?.fields?.body} links={project?.fields?.links} />
                        </Col>
                    ))}
                </Row>
                {more_projects_link && <Row className="mt-5">
                    <Button href={more_projects_link?.fields?.href} target="blank" variant={more_projects_link?.fields?.variant} className="col-md-3 mx-auto fs-4 ">
                            <span className="m-2">{more_projects_link?.fields?.text}</span> <Icon name={more_projects_link?.fields?.icon} />                
                    </Button>
                </Row>}
            </Container>
        </section>
    );
}
Projects.propTypes = {
    title: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    more_projects_link: PropTypes.shape({
        fields: PropTypes.shape({
            text: PropTypes.string,
            icon: PropTypes.string,
            href: PropTypes.string,
            variant: PropTypes.string
        })
    }).isRequired,
};

Projects.defaultProps = {
    title: "",
    projects: [],
    more_projects_link: {}
};
export default Projects;
