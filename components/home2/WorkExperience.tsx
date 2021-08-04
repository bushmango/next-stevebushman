import css from './WorkExperience.module.scss'
import l from 'lodash'

const jobs = [
  // {
  //   separator: true,
  // },

  {
    title: 'Master Full-Stack Developer',
    location: 'Washington, DC',
    company: 'General Services Administration (GSA)',
    start: '8/2021',
    end: 'Present',
    skills: `Full Stack Web / Development and Management / Javascript / Typescript / React / Node.js / Amazon Web Services (AWS) GIT Source Control / HTML / CSS / SCSS`,
    description: `Upgrading legacy federal applications to manage the world's largest fleet of vehicles.`,
  },
  {
    separator: true,
  },
  {
    title: 'Chief Technical Officer (CTO)',
    location: 'Madision, WI',
    company: 'Keep Flying Games',
    start: '5/2020',
    end: 'Present',
    skills: `Full Stack Web / Development and Management / Javascript / Typescript / React / Node.js / Phaser.js / Game Dev`,
    description: `Build, managed, and marketed several games. Look forward to our catalog coming in late 2020.`,
  },
  {
    separator: true,
  },
  {
    title: 'Principal Software Engineer and UI/UX Engineering Manager',
    location: 'Madison, WI',
    company: 'SwanLeap',
    start: '1/2019',
    end: '5/2020',
    skills: `Full Stack Web / Development and Management / Javascript / Typescript / React / Node.js / D3.js / Data Visualization / Amazon Web Services (AWS) / AWS Dynamo / AWS ElasticSearch / GIT Source Control / HTML / CSS`,
    description: `Directed the User Interface and User Experience (UI/UX) department of 10+ developers. Built testing solutions, translation systems, architecture. Directed multiple projects at the same time from design to completion. Maintained and decommissioned legacy software.`,
  },
  {
    separator: true,
  },

  {
    title: 'Chief Technical Officer (CTO)', // Independent Senior Software Contractor and Consultant and
    company: 'WhereIsCare',
    location: 'Madison, WI',
    start: '1/2018',
    end: '1/2019',
    skills: `Full Stack Web / Mobile Development / Javascript / Typescript / React / Angular / Node.js / C++ / Java / C# / ASP.net / PostgreSQL / GIT Source Control / HTML / CSS + SASS / Linux Servers / Amazon Web Services / SEO / Google Analytics / Google Ads`,
    //clients:
    // 'superwordcat.com / www.whereiscare.org / www.valuestreammodeling.com',
    description:
      'WhereIsCare was a non-profit focused on helping people find homeless shelters, food pantries, and discounted health and dental resources. Front and back end web development, linux server administration, project modernization, team management',
  },
  {
    separator: true,
  },
  {
    title: 'Senior Software Contractor and Consultant',
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
