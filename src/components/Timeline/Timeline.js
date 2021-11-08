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
    const { timelineItems, sectionTitle } = props;
    return (
        <div className="section-padding container-md text-white">
            <h1 className="text-center mb-5">
                {sectionTitle}
            </h1>
            <VerticalTimeline>
                {timelineItems.map((item, i) => (
                    <VerticalTimelineElement key={i}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: item?.fields?.iconBackgroundColor }}
                        contentArrowStyle={{ borderRight: '7px solid  ' + item?.fields?.contentBackgroundColor }}
                        date={item?.fields?.date}
                        iconStyle={{ background: item?.fields?.contentBackgroundColor }}
                        icon={<Icon name={item?.fields?.iconName} />}
                    >
                        <h3 className="vertical-timeline-element-title">{item?.fields?.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{item?.fields?.subtitle}</h5>
                        <p>
                            {item?.fields?.description?.content[0]?.content[0]?.value}
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
    timelineItems: PropTypes.arrayOf(PropTypes.shape({
        fields: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
            description: PropTypes.shape({}),
            date: PropTypes.string,
            iconName: PropTypes.string,
            iconBackgroundColor: PropTypes.string,
            contentBackgroundColor: PropTypes.string
        })
    })).isRequired
};
TimeLine.defaultProps = {
    sectionTitle: "",
    timelineItems: []
};
export default TimeLine;

