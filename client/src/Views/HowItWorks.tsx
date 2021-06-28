import React from 'react'
//@ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'

const HowItWorks = () => {
    return (
        <div>

            <VerticalTimeline
                className='vertical-timeline-custom-line'
            >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#212529', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #212529' }}
    iconStyle={{ background: '#212529', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Create an account</h3>
    <p className="vertical-timeline-element-subtitle">It's free and always will be.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#212529', color: '#fff' }}
     
  >
    <h3 className="vertical-timeline-element-title">Verify your account.</h3>
    <p className="vertical-timeline-element-subtitle">Either by link or by code.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#212529', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #212529' }}
    date="2008 - 2010"
    iconStyle={{ background: '#212529', color: '#fff' }}
     
  >
    <h3 className="vertical-timeline-element-title">Build a catchy profile.</h3>
    <p className="vertical-timeline-element-subtitle">Let people know how good you are.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#212529', color: '#fff' }}
     
  >
    <h3 className="vertical-timeline-element-title">Start Taking Quizzes.</h3>
    <p className="vertical-timeline-element-subtitle">Choose from a wide variety of topics.</p>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#212529', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #212529' }}
    iconStyle={{ background: '#212529', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Decorate your wall.</h3>
    <p className="vertical-timeline-element-subtitle">Get badges for your achievements.</p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: '#212529', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: '#212529', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #212529' }}
    contentStyle={{ background: '#212529', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    )
}

export default HowItWorks
