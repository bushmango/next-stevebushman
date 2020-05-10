import _ from 'lodash'
import { FontAwesome } from './FontAwesome-sidecar'

export const ResumeList = (props: { items: string[] }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {_.map(props.items, (c, cIdx) => (
        <div key={cIdx} style={{ width: '220px' }}>
          <FontAwesome name='cog' /> {c}
        </div>
      ))}
    </div>
  )
}
