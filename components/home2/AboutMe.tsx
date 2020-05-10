import css from './AboutMe.module.scss'

export const AboutMe = () => (
  <div>
    <div className='big-text'>About Me</div>

    <div className='about-me-item'>
      <div className='about-me-item-header'>
        Competitive Programming and Design
      </div>
      <div className='about-me-item-desc'>
        Competes in Ludum Dare, a twice-yearly international 72-hour game
        programming competition, leads our team
        <div>
          <br />
          Check out our latest game!
          <div>
            <a href='https://ldjam.com/events/ludum-dare/43/space-goat-coast-to-coast'>
              https://ldjam.com/events/ludum-dare/43/space-goat-coast-to-coast
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='about-me-item'>
      <div className='about-me-item-header'>Rock Climbing</div>
      <div className='about-me-item-desc'>
        Guides groups of climbers at Devil’s Lake. Emphasis on safety,
        efficiency, and technical knowledge. Strong attention to detail and
        coaching in a high-pressure environment where mistakes can be fatal
      </div>
    </div>
  </div>
)
