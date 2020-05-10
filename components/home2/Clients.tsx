import l from 'lodash'

let clientList = [
  // {
  //   name: 'SuperWordCat',
  //   url: 'https://www.superwordcat.com',
  //   logo: 'https://superwordcat.com/public/images/kitty/logo-cat-fat-small.png',
  // },
  {
    name: 'Vusion',
    url: 'http://www.vusion.net',
    logo:
      'https://www.vusion.net/Portals/0/Vusion-logo.png?ver=2017-11-14-214443-170',
    backgroundColor: '#4C9D2A',
  },
  {
    name: 'Wisconson Eye',
    url: 'http://www.wiseye.org/',
    logo: 'https://wiseye.org/wp-content/themes/wiseye/images/logo-full.svg',
  },

  {
    name: 'Johnson Controls',
    url: 'https://www.johnsoncontrols.com/',
    logo:
      'https://www.johnsoncontrols.com/-/media/jci/be/united-states/our-brands/final/johnson-controls.png?h=175&w=400&la=en&hash=BD13FF9939946B200825EE0159B69A1B5CE2C78E',
  },
  {
    name: 'eduBakery',
    url: 'http://www.edubakery.com',
    logo: '/public/images/eduBakery-Brenden-Logo-Compact.png',
    //'http://edubakery.com/Images/Logos/eduBakery-Brenden-Logo-Compact.png',
  },
  {
    name: 'SwanLeap',
    url: 'https://swanleap.com/',
    logo: '/public/images/2020-05-10 09_31_10-SwanLeap _ SwanLeap.png',
  },
  // {
  //   name: 'Where is Care',
  //   url: 'http://www.whereiscare.org',
  //   // logo: 'https://www.whereiscare.org/assets/images/wic-logo.png',
  //   logo: '',
  // },
]
export const Clients = () => (
  <div>
    <div className='big-text'>Some of Our Clients</div>

    {l.map(clientList, (c, cIdx) => {
      return (
        <div key={cIdx} className='client'>
          <div className='client-name'>
            <a href={c.url} target='_blank'>
              {c.name}
            </a>
          </div>
          <div
            className='client-image'
            style={{ backgroundColor: c.backgroundColor || 'white' }}
          >
            {' '}
            {c.logo && <img src={c.logo} />}
            {/* <a href={c.url} target='_blank'>
              {c.url.endsWith('.svg') ? <div>svg</div> : <img src={c.logo} />}
            </a> */}
          </div>
          <div>
            <a href={c.url} target='_blank'>
              {c.url}
            </a>
          </div>
        </div>
      )
    })}
  </div>
)
