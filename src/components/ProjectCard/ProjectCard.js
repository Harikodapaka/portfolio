import './ProjectCard.css';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

function ProjectCard() {
    return (
        <section>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Project 1</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Secondary Card Title</Card.Title> */}
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}

export default ProjectCard;
