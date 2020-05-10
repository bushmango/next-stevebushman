import { CenterPanel } from '../layout/CenterPanel-sidecar'
import { ColumnTwo } from '../layout/ColumnTwo-sidecar'

export const Layout2 = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <CenterPanel>
        <ColumnTwo>
          <div>
            SteveBushman.com <br />
            Software engineers and designers
            <br />
            Madison, Wisconsin
          </div>
          <div>
            steve@stevebushman.com
            <br />
            Please email us for a phone or in-person appointment
          </div>
        </ColumnTwo>
      </CenterPanel>

      {props.children}

      <CenterPanel>
        <div style={{ minHeight: '200px', paddingTop: '60px' }}>
          <ColumnTwo>
            <div>&copy; Steve Bushman 2008-2018</div>
            <div>steve@stevebushman.com</div>
          </ColumnTwo>
        </div>
      </CenterPanel>
    </div>
  )
}
