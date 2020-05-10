import css from './WorkExperience.module.scss'
import l from 'lodash'

const jobs = [
  // {
  //   separator: true,
  // },
  {
    title: 'Independent Software Contractor and Consultant',
    company: 'SteveBushman.com',
    location: 'Madison, WI',
    start: '1/2018',
    end: 'Present',
    skills: `Full Stack Web / Mobile Development / Javascript / Typescript / React / Angular / Node.js / C++ / Java / C# / ASP.net / PostgreSQL / GIT Source Control / HTML / CSS + SASS / Linux Servers / Amazon Web Services / SEO / Google Analytics / Google Ads`,
    clients:
      'superwordcat.com / www.whereiscare.org / www.valuestreammodeling.com',
    description:
      'Front and back end web development, linux server administration, project modernization, team management',
  },
  {
    separator: true,
  },
  {
    title: 'Software Contractor and Consultant',
    location: 'Madison, WI',
    company: 'Yahara Software',
    start: '5/2015',
    end: '3/2018',
    skills: `Full Stack Web / Javascript / Typescript / React / Angular / Node.js / D3.js / Data Visualization / C# / ASP.net / Microsoft SQL / PostgreSQL / GIT Source Control / HTML / CSS / Amazon Web Services / SEO / Google Analytics`,
    clients: 'www.vusion.net / www.wiseye.org / madisoncollege.edu',
    description: `Developed data visualization software for Vusion to help manage fleets of trucks. Modernized WisEye.org to provide election coverage. Created a dynamic course catalog for Madison College
    Worked closely with other developers and clients to build data analysis and visualization packages
    Proposed solutions to new clients`,
  },
  {
    separator: true,
  },
  {
    title: 'Independent Software Contractor and Consultant',
    company: 'SteveBushman.com',
    location: 'Madison, WI',
    clients: 'edubakery.com',
    start: '12/2014',
    end: '5/2015',
    skills: `Full Stack Web / C# / Java / Flash / ASP.net / Microsoft SQL / Mercurial Source Control / Web Sockets / HTML / CSS / Javascript / SEO / Google Analytics / Google Ads`,

    description: `Converting a Java and Flash application to a modern HTML5 web app. Business-to-Consumer marketing and advertising campaign`,
  },
  {
    separator: true,
  },
  {
    title: 'Software Engineer',
    location: 'Madison, WI',
    company: 'CUNA Mutual',
    start: '11/2013',
    end: '12/2014',
    skills: `Full Stack Web / C# / VB.net / ASP.net / Microsoft SQL / Change Management / WebSockets / HTML / CSS`,

    description: `Upgrading existing and developing new ASP.net web applications for both internal and external customers
    Converted existing desktop applications to web applications
    Worked directly with business customers to provide solutions 
    Provided training for modern technology and software engineering methodologies to improve performance, reduce defects, reduce cost, and provide a better user experience`,
  },
  {
    separator: true,
  },
  {
    title: 'Software Engineer and Marketing / Business Development',
    location: 'Madison, WI',
    company: 'eduBakery.com',
    start: '2008 ',
    end: '2013',
    skills: `Full Stack Web / Desktop / C# / ASP.net / Java / Asp.net / MVC / jQuery / Javascript / Microsoft SQL / HTML / CSS / SEO / Google Analytics / Google Ads`,

    description: `Developing software to help teachers create word games for their classrooms
    Web and desktop software solutions for both Mac OS X and Windows`,
  },
  {
    separator: true,
  },
  {
    title: 'Software Engineer',
    location: 'Milwaukee, WI',
    company: 'Johnson Controls',
    start: '2004',
    end: '2008',
    skills: `Full Stack Web / Desktop / Embedded C++ / C# / ASP / ASP.net / Visual Basic / Microsoft SQL / HTML / CSS`,

    description: `Developing software tools and improving software processes
    ASP.NET web application, Windows desktop application, and embedded development
    Developed code inspection tools and improved software engineering practices
    Assisted in training for staff to reduce software defects
    `,
  },
  // {
  //   separator: true,
  // },
]

export const WorkExperience = () => (
  <div>
    <div className='big-text'>Work Experience</div>

    <div className='jobs'>
      {l.map(jobs, (c, cIdx) => {
        if (c.separator) {
          return (
            <div key={cIdx}>
              <hr className='job-separator' />
            </div>
          )
        }
        return (
          <div className='job' key={cIdx}>
            <div className='job-header'>
              <div className='job-title'>{c.title}</div>
            </div>
            <div className='job-header2'>
              <div className='job-company'> {c.company}</div>
              <div className='job-time'>
                {c.start} &mdash; {c.end}
              </div>

              <div className='job-location'>{c.location}</div>
            </div>
            <div className='job-details'>
              <div className='job-skills'>Environment &ndash; {c.skills}</div>
              {c.clients && (
                <div className='job-clients'> Clients &ndash; {c.clients}</div>
              )}

              <div className='job-desc'>{c.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)
