import { WorkExperience } from './WorkExperience'
import { Buzz } from './Buzz'
import { Clients } from './Clients'
import { AboutMe } from './AboutMe'

//import css from './HomePageNew.module.scss'

const insideStyles: React.CSSProperties = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}

const image1 =
  'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'

const MailTo = () => (
  <a href='mailto:steve@stevebushman.com'>steve@stevebushman.com</a>
)

import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Head from 'next/head'

const Header = () => (
  <div className='header-2'>
    <div className='header-left'>
      <div className='header-photo'>
        <img src='/images/profilecroppedcircle.png' />
      </div>
      <div>
        <div className='header-name'>Steve Bushman</div>
        <div className='header-title'>Software Engineer and Consultant</div>
      </div>
    </div>
    <div className='header-right'>
      <div>Madison, WI</div>
      <div>
        <MailTo />
      </div>
      <div>414.510.2140</div>
    </div>
  </div>
)
// const BigBanner = () => (
//   <div className="section2">
//     <Parallax
//       bgImage={
//         '/images/pexels/apple-black-and-white-black-and-white-169573.jpg'
//       }
//       strength={500}
//     >
//       <div className="section2-header">
//         <strong>Modern software development</strong>
//       </div>
//     </Parallax>
//   </div>
// )

const BigBanner2 = () => {
  return (
    <div className='section3'>
      <ParallaxProvider>
        <ParallaxBanner
          className='your-class'
          layers={
            [
              {
                image: '/images/pexels/apple-cropped.jpg',
                amount: 0.4,
                slowerScrollRate: false,
              },
            ] as any
          }
          style={{
            height: '600px',
          }}
        >
          {/* <div className="section3-header">
            <strong>Modern software development</strong>
          </div> */}
        </ParallaxBanner>
        <div className='section3-header'>
          <strong>Full-stack software development</strong>
        </div>
        {/* <Parallax2
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
          tag="figure"
        >
          <img src="/public/images/pexels/apple-black-and-white-black-and-white-169573.jpg" />
        </Parallax2> */}
      </ParallaxProvider>
    </div>
  )
}

const Footer = () => (
  <div className='footer'>
    <div>
      {/* <Parallax
                bgImage={
                  '/images/32937234_10211325904719766_9214946423416553472_n.jpg'
                }
                strength={200}
              >
                <div style={{height: '600px', minWidth: '1200px'}}>asdf</div>
                
              </Parallax> */}

      <img
        className='footer-image'
        src='/images/32937234_10211325904719766_9214946423416553472_n.jpg'
      />
    </div>
    <div className='contact-me'>
      <div className='contact-me-header'>Contact me </div>
      <div>Steve Bushman</div>
      <div>Madison, WI</div>
      <div>
        <MailTo />
      </div>
      <div>414.510.2140</div>
    </div>
  </div>
)

export const HomePageNew = () => {
  return (
    <div>
      <Head>
        <title>SteveBushman.com</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
          rel='stylesheet'
        ></link>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500|Luckiest+Guy'
        />
      </Head>

      <div className='container' style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className='container-border'>
          <Header />

          {/* <div className="section1">
              <strong>Modern software development</strong>
            </div> */}

          <BigBanner2 />
          {/* <BigBanner /> */}

          {/* <div className="header">header</div> */}

          <div className='content'>
            {/* <div className="big-text">
                We don't just build software, we engineer it.
              </div>
              <div>
                Our advantage is we care about{' '}
                <strong>performance, testability, maintenance costs </strong>
                and <strong>risk management</strong>
              </div> */}

            <Buzz />
            <WorkExperience />
            <Clients />
            <AboutMe />

            {/* <BuzzBox title="Front-End Web Development" buzzList={buzzWeb} />
              <BuzzBox title="Back-End Development" buzzList={buzzBackend} />
              <BuzzBox title="Cloud Computing" buzzList={buzzCloud} />
              <BuzzBox title="Database Development" buzzList={buzzDatabase} />
              <BuzzBox title="Mobile Development" buzzList={buzzMobile} />
              <BuzzBox title="Desktop Development" buzzList={buzzDesktop} />
              <BuzzBox title="Data Visualization" buzzList={buzzDataViz} />
              <BuzzBox
                title="Software Engineering"
                buzzList={buzzEngineering}
              />
              <BuzzBox title="Leadership" buzzList={buzzLeadership} />
              <BuzzBox title="Other Skills" buzzList={buzzSecondary} /> */}
            <br />
            {/* <div>
                <Parallax
                  bgImage={
                    '/images/pexels/apple-black-and-white-black-and-white-169573.jpg'
                  }
                  strength={500}
                >
                  <div style={{ height: 500 }}>
                    <div style={insideStyles}>HTML inside the parallax</div>
                  </div>
                </Parallax>
              </div> */}
            {/* <div>
                <Parallax bgImage={image1} strength={500}>
                  <div style={{ height: 500 }}>
                    <div style={insideStyles}>HTML inside the parallax</div>
                  </div>
                </Parallax>
              </div> */}
            {/* <div>
                <Parallax strength={300}>
                  this has a custom background
                  <Background className="custom-bg">
                    <img
                      src="http://www.fillmurray.com/500/320"
                      alt="fill murray"
                    />
                  </Background>
                </Parallax>
              </div> */}
            {/* <div>
                <Parallax
                  bgImage={
                    '/images/pexels/apple-black-and-white-black-and-white-169573.jpg'
                  }
                  bgImageAlt="the cat"
                  strength={200}
                >
                  Put some text content here - even an empty div with fixed
                  dimensions to have a height for the parallax.
                  <div style={{ height: '200px' }} />
                </Parallax>
              </div> */}

            {/* <div className="tri-image-section">
                <div className="image image1">first section</div>
                <div className="image image2">image 2</div>
                <div className="image image3">image 3</div>
              </div> */}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}
