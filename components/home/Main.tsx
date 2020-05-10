import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {
  faChartLine,
  faCode,
  faCog,
  faDatabase,
  faLaptop,
  faMobile,
  faPencilAlt,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { CenterPanel } from '../layout/CenterPanel-sidecar'
import { AnimBlock } from './AnimBlock-sidecar'
import { BlockContainer } from './BlockContainer-sidecar'
import { Border } from './Border-sidecar'
import { colors } from './colors-sidecar'
import { FontAwesome } from './FontAwesome-sidecar'
import { Link } from './Link-sidecar'
import { Quote } from './Quote-sidecar'
import { ResumeList } from './ResumeList-sidecar'

export const Main = () => {
  return (
    <div>
      <MainOld />
    </div>
  )
}

// Inspiration
// https://benbate.com/
// http://mercertavern.com/

let quotes = [
  {
    text:
      'Simple things should be simple and complex things should be possible.',
    author: 'Alan Kay',
    source: 'http://vanderburg.org/etc/soft-quotes.html',
  },
  {
    text:
      'Good judgement is the result of experience … Experience is the result of bad judgement.',
    author: 'Fred Brooks',
    source: 'http://vanderburg.org/etc/soft-quotes.html',
  },
  {
    text:
      'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Abelson and Sussman',
    source: 'http://vanderburg.org/etc/soft-quotes.html',
  },
]
export const RandomQuote = () => {
  let quote = quotes[0]
  return <Quote text={quote.text} author={quote.author} />
}

export const MainOld = () => {
  return (
    <div style={{ fontFamily: "'PT Sans', sans-serif", marginTop: '20px' }}>
      <CenterPanel>
        <div
          style={{ fontSize: '40px', textAlign: 'center', marginTop: '30px' }}
        >
          We build software for you.
        </div>

        <div style={{ maxWidth: '600px' }}>
          <RandomQuote />
        </div>

        <Link to='/contact-us' style={{ textDecoration: 'none' }}>
          <BlockContainer>
            <AnimBlock icon={faHtml5} title='Web Apps'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '140px',
                }}
              >
                <FontAwesome name='internet-explorer' size='3x' />
                <FontAwesome name='chrome' size='3x' />
                <FontAwesome name='firefox' size='3x' />
                <FontAwesome name='safari' size='3x' />
                {/* <FontAwesome name='edge' size='3x' /> */}
              </div>
            </AnimBlock>
            <AnimBlock icon={faLaptop} title='Desktop Apps'></AnimBlock>
            <AnimBlock icon={faMobile} title='Mobile Apps'></AnimBlock>
          </BlockContainer>
        </Link>

        <div
          style={{
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <div style={{ fontSize: '25px' }}>
            Do your projects need to work on your customer's computers, tablets,
            and phones?
          </div>
          <div style={{ fontSize: '40px' }}>Ours do.</div>
        </div>

        <Border title='Buzzwords' borderColor={colors.blue300}>
          <ResumeList
            items={[
              'React',
              'Typescript',
              'Javascript',
              'NodeJS',
              'npm',
              'ASP.net',
              'C#',
              'Windows',
              'Linux',
              'Digital Ocean',
              'Amazon Web Services (AWS)',
              'Cloud computing',
              'Lambda',
              'HTML 5',
              'CSS 3',
              'Mobile-first',
              'Responsive',
              'SQL',
              'MySQL',
              'PostgreSQL',
              'Microsoft SQL (MSSQL)',
              'Non-relational databases',
              'Database design',
              '... and more',
            ]}
          />

          <div
            style={{
              fontSize: '25px',
              textAlign: 'right',
              paddingTop: '10px',
            }}
          >
            This is just a list of buzzwords, contact us to see if our skills we
            fit your needs
          </div>
        </Border>

        <Link to='/contact-us' style={{ textDecoration: 'none' }}>
          <BlockContainer>
            <AnimBlock title='Code' icon={faCode}>
              We make clean code
              <FontAwesome name='bath' size='4x' />
            </AnimBlock>

            <AnimBlock title='Design' icon={faPencilAlt}></AnimBlock>

            <AnimBlock icon={faChartLine} title='Visualizations'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '140px',
                }}
              >
                <FontAwesome name='bar-chart' size='3x' />
                <FontAwesome name='pie-chart' size='3x' />
                <FontAwesome name='area-chart' size='3x' />
              </div>
            </AnimBlock>

            <AnimBlock icon={faDatabase} title='Data'></AnimBlock>

            <AnimBlock icon={faWrench} title='Maintenance'></AnimBlock>

            <AnimBlock icon={faCog} title='Prototyping'></AnimBlock>

            <AnimBlock title='Rates'>
              <div style={{ textAlign: 'center', fontSize: '20px' }}>
                $149 &ndash; $249/hr
              </div>

              <br />
              <div style={{ textAlign: 'center' }}>
                or per-project-milestone
              </div>
              <br />
              <br />
              <div style={{ textAlign: 'center' }}>
                &mdash; discounts available &mdash;
                <br />
                <br />
                non-profits, friends and family, long-term contracts
              </div>
            </AnimBlock>

            <AnimBlock title='Contact Us'>
              <div style={{ textAlign: 'center', fontSize: '20px' }}>
                steve@stevebushman.com
              </div>
              <br />
              Please email us for a phone or in-person appointment
              <br />
              <br />
              Free estimates and initial consultation
              <br />
              <br />
              If we aren't right for your project, we'll tell you
            </AnimBlock>

            <AnimBlock title='Current Availability'>
              <div style={{ textAlign: 'center', fontSize: '20px' }}>Low</div>
              <br />
              Book contracts now to ensure future availability
            </AnimBlock>
          </BlockContainer>
        </Link>
      </CenterPanel>
    </div>
  )
}
