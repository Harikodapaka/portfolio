import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import * as ReactFaIcons from 'react-icons/fa'
import './ProjectCard.css';


const Icon = ({ name }) => {
    const TagName = ReactFaIcons[name];
    return !!TagName ? <TagName /> : <p>{name}</p>;
}

function ProjectCard(props) {
    const {
        title,
        body,
        links
    } = props;
    return (
        <Card className="h-100 project-card">
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
            {Array.isArray(links) && <Card.Footer className="icon-alignment fs-4">
                {links.map((link, i) => (
                    <a href={link.fields.href}
                        key={i}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.fields.href}>
                        {<Icon name={link.fields.icon} />}
                    </a>
                ))}
            </Card.Footer>}
        </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        fields: PropTypes.shape({
            href: PropTypes.string,
            icon: PropTypes.string,
        })
    })),
};

ProjectCard.defaultProps = {
    title: "",
    body: "",
    links: PropTypes.arrayOf(PropTypes.shape({
        fields: {}
    })),
};

export default ProjectCard;
