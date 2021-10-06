import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './ProjectCard.css';
import { BsGithub } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

function ProjectCard(props) {
    const {
        title,
        body,
        links
    } = props;
    return (
            <Card className="h-100">
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="icon-alignment fs-4">
                    {links.map((link, i) => (
                        <a  href={link.href}
                        key={i}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.href}>
                        {link.icon === "GitHub"? <BsGithub /> : <BsLink45Deg />}
                        </a>
                    ))}
                </Card.Footer>
            </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    })),
};

export default ProjectCard;
