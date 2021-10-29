import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import * as ReactFaIcons from 'react-icons/fa'


const Icon = ({ name }) => {
    const TagName = ReactFaIcons[name];
    return !!TagName ? <TagName /> : <p>{name}</p>;
}

function TimeLine(props) {
    const { timelineData, sectionTitle } = props;
    return (
        <div className="section-padding container-md text-white">
            <h1 className="text-center mb-5">
                {sectionTitle}
            </h1>
            <VerticalTimeline>
                {timelineData.map((item, i) => (
                    <VerticalTimelineElement key={i}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: item.iconBackgroundColor }}
                        contentArrowStyle={{ borderRight: '7px solid  '+item.contentBackgroundColor }}
                        date={item.date}
                        iconStyle={{ background: item.contentBackgroundColor }}
                        icon={<Icon name={item.iconName} />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{item.subtitle}</h5>
                        <p>
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconClassName="bg-danger"
                    icon={<Icon name="FaRegThumbsUp" />}
                />
            </VerticalTimeline>
        </div>
    );
}
TimeLine.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    timelineData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        iconName: PropTypes.string.isRequired,
        iconBackgroundColor: PropTypes.string.isRequired,
        contentBackgroundColor: PropTypes.string.isRequired
    }))
};
export default TimeLine;

