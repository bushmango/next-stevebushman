import l from 'lodash'

const prepList = (list: string[]) => {
  let newList: string[] = []
  l.forEach(list, (c, cIdx) => {
    if (cIdx > 0) {
      newList.push('')
    }
    newList.push(c)
  })
  return newList
}

const buzzWeb = prepList([
  'Javascript',
  'Typescript',
  'React',
  'Angular',
  'HTML',
  'CSS',
  'SASS',
  'User-Interface Design',
])
const buzzBackend = prepList([
  'Node.JS',
  'C#',
  'Linux Server Administration',
  'Windows Server Administration',
])
const buzzCloud = prepList([
  'Amazon Web Services',
  'Microsoft Azure',
  'DigitalOcean',
])
const buzzDatabase = prepList([
  'Microsoft SQL',
  'MySQL',
  'PostgreSQL',
  'NoSQL Databases',
])
const buzzDesktop = prepList(['C#', 'WinForms', 'Electron', 'C++'])
const buzzMobile = prepList(['Mobile-first HTML', 'ReactNative', 'Cordova'])
const buzzDataViz = prepList([
  'D3.js',
  'Strong Math Skills',
  'Data Analysis',
  'Data Visualization and Charting Theory',
])

const buzzEngineering = prepList([
  'Performance',
  'Optimization',
  'Bottleneck Analysis',
  'Monitoring',
  'Scalability',
  'Iterative Development',
  'Agile',
  'Test-Driven-Development',
  'Source Control (Git)',
  'Change Control',
])
const buzzLeadership = prepList([
  'Managing Developers',
  'Training',
  'Public Speaking',
  'Software Architecture',
])
const buzzSecondary = prepList([
  'Java',
  'Embedded C++',
  'Visual Basic',
  'Search Engine Optimization (SEO)',
  'Google Ads',
  'Bootstrap',
  'jQuery',
  'NPM',
  'Networking with TCP / UDP / Sockets',
])

const BuzzBox = (props: { title: string; buzzList: string[] }) => (
  <div className='buzz-section'>
    <div className='buzz-header'>{props.title}</div>
    <div className='buzz-items'>
      {l.map(props.buzzList, (c, cIdx) => {
        if (c === '') {
          return (
            // <div key={cIdx} className="buzz-spacer">
            //   {' '}
            //   <FaIcon icon="cog" />{' '}
            // </div>
            <div key={cIdx} className='buzz-spacer'>
              &ndash;
            </div>
          )
        }
        return <div key={cIdx}>{c}</div>
      })}
    </div>
  </div>
)
const BuzzBox2 = (props: { title: string; buzzList: string[] }) => (
  <div className='buzz2-section'>
    <div className='buzz2-header'>{props.title}</div>
    <div className='buzz2-items'>
      {l.map(props.buzzList, (c, cIdx) => {
        if (c === '') {
          return null
        }
        return <div key={cIdx}>{c}</div>
      })}
    </div>
  </div>
)

const BuzzBox3 = (props: { title: string; buzzList: string[] }) => (
  <div className='buzz3-section'>
    <div className='buzz3-header'>{props.title}</div>
    <div className='buzz3-items'>
      {l.map(props.buzzList, (c, cIdx) => {
        if (c === '') {
          return (
            <div key={cIdx} className='buzz-spacer'>
              &ndash;
            </div>
          )
        }
        return <div key={cIdx}>{c}</div>
      })}
    </div>
  </div>
)

export const Buzz = () => (
  <div>
    {/* <div className="big-text">Full Stack Development</div> */}
    <div className='image-section'>
      <div className='buzz2-boxes'>
        <div className='image image1' />
        <BuzzBox2 title='Front-End Web Development' buzzList={buzzWeb} />
        <BuzzBox2 title='Back-End Development' buzzList={buzzBackend} />
        <BuzzBox2 title='Cloud Computing' buzzList={buzzCloud} />
        {/* </div>
      <div className="buzz2-boxes"> */}
        <div className='image image2' />
        <BuzzBox2 title='Database Development' buzzList={buzzDatabase} />
        <BuzzBox2 title='Mobile Development' buzzList={buzzMobile} />
        <BuzzBox2 title='Desktop Development' buzzList={buzzDesktop} />
        {/* </div>
      <div className="buzz2-boxes"> */}
        <div className='image image3' />
        <BuzzBox2 title='Data Visualization' buzzList={buzzDataViz} />
        <BuzzBox2 title='Software Engineering' buzzList={buzzEngineering} />
        <BuzzBox2 title='Leadership' buzzList={buzzLeadership} />
      </div>
      <div>
        <BuzzBox3 title='Other Skills' buzzList={buzzSecondary} />
      </div>
    </div>
  </div>
)
