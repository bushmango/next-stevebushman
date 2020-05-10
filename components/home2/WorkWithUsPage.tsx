import { CenterPanel } from '../layout/CenterPanel-sidecar'
import { Link } from '../home/Link-sidecar'
import { Border } from '../home/Border-sidecar'

export const WorkWithUsPage = () => {
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

        <Border title='Work with Us' borderColor={'#467eac'}>
          <div>
            We are looking for talented software engineers, programmers, and
            developers to join our team
          </div>
          <div>Please email us your resume and we will talk</div>
          <div>We look forward to hearing from you</div>
          <div
            style={{
              textAlign: 'left',
              paddingLeft: '20px',
              fontSize: '20px',
              marginTop: '20px',
            }}
          >
            steve@stevebushman.com
          </div>
          <br />
        </Border>
      </CenterPanel>
    </div>
  )
}
