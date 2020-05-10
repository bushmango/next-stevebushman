// import { Button } from 'components/mui-compat/Button'
// import { Icon } from 'components/mui-compat/Icon'

import { CenterPanel } from '../layout/CenterPanel-sidecar'
import { Link } from '../home/Link-sidecar'
import { Border } from '../home/Border-sidecar'

export const ContactUsPage = () => {
  return (
    <div style={{ fontFamily: "'PT Sans', sans-serif", marginTop: '20px' }}>
      <CenterPanel>
        <div style={{ paddingBottom: '10px' }}>
          <Link to='/'>
            {/* <Button color='primary'>
                <FaIcon icon='home' style={{ marginRight: '5px' }} />
                Back Home
              </Button> */}
          </Link>
        </div>

        <Border title='Contact Us' borderColor={'#467eac'}>
          <div
            style={{
              textAlign: 'left',
              paddingLeft: '20px',
              fontSize: '20px',
            }}
          >
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
        </Border>
      </CenterPanel>
    </div>
  )
}
