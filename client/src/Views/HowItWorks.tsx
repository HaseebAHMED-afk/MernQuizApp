import React from 'react'
//@ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'

const HowItWorks = () => {
    return (
        <div>
            <h1 className='how-it-works-main-heading' >How It Works</h1>
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
    <h3 className="vertical-timeline-element-title">Learn more.</h3>
    <p className="vertical-timeline-element-subtitle">Don't stop.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: '#212529', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #212529' }}
    contentStyle={{ background: '#212529', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Share and Win.</h3>
    <p className="vertical-timeline-element-subtitle">Get a special badge for inviting 10 people onto our platform.</p>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    )
}

export default HowItWorks
