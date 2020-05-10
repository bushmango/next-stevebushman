import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { sineInOut } from 'eases'
import React from 'react'
import { colors } from './colors-sidecar'
import { Icon } from './Icon-sidecar'

export const AnimBlock = (props: {
  backgroundColor?: any
  icon?: IconDefinition
  title?: string
  children?: React.ReactNode
}) => {
  let state = {
    interval: 1000,
    mouseOver: false,
    raf: 0,
    t: 0,
    frame: 0,
  }

  // componentDidMount() {
  //   this.setState({
  //     raf: requestAnimationFrame(this._onAnimationFrame),
  //   })
  // }

  // componentWillUnmount() {
  //   cancelAnimationFrame(this.state.raf)
  // }

  // _onAnimationFrame() {
  //   let animFrames = 20
  //   let { t, frame } = this.state
  //   if (this.state.mouseOver) {
  //     t += 1 / animFrames
  //   } else {
  //     t -= 1 / animFrames
  //   }
  //   if (t < 0) {
  //     t = 0
  //   }
  //   if (t > 1) {
  //     t = 1
  //   }

  //   this.setState({
  //     t,
  //     raf: requestAnimationFrame(this._onAnimationFrame),
  //     frame: frame + 1,
  //   })
  // }
  // _on_mouseEnter() {
  //   this.setState({ mouseOver: true })
  // }

  // _on_mouseLeave() {
  //   this.setState({ mouseOver: false })
  // }

  let backgroundColor = props.backgroundColor || colors.green600
  let shadowColor = colors.indigo600

  let { t } = state
  let sinT = sineInOut(t)
  let height = 0 - sinT * 20

  let offset = sinT * 4
  let boxShadow = 4 + offset
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        display: 'inline-block',
        marginTop: `${4 - offset}px`,
      }}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <div
        style={{
          width: '300px',
          height: '300px',
          display: 'inline-block',
        }}
      >
        <div
          style={{
            backgroundColor: backgroundColor,
            margin: `10px`,
            padding: '10px',
            height: '260px',
            borderRadius: '10px',
            boxShadow: `${boxShadow}px ${boxShadow}px 2px ${shadowColor}`,
          }}
        >
          <div style={{ color: 'white' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '52px',
              }}
            >
              {props.icon ? (
                <div style={{ marginRight: '10px' }}>
                  <Icon icon={props.icon} />
                  {/* <FontAwesome name={props.icon} size='4x' /> */}
                </div>
              ) : null}
              {props.title ? (
                <div style={{ fontSize: '28px' }}>{props.title}</div>
              ) : null}
            </div>
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export class AnimBlock extends React.Component<
//   {
//     backgroundColor?: any
//     icon?: string
//     title?: string
//   },
//   any
// > {
//   state = {
//     interval: 1000,
//     mouseOver: false,
//     raf: 0,
//     t: 0,
//     frame: 0,
//   }

//   componentDidMount() {
//     this.setState({
//       raf: requestAnimationFrame(this._onAnimationFrame),
//     })
//   }

//   componentWillUnmount() {
//     cancelAnimationFrame(this.state.raf)
//   }

//   _onAnimationFrame() {
//     let animFrames = 20
//     let { t, frame } = this.state
//     if (this.state.mouseOver) {
//       t += 1 / animFrames
//     } else {
//       t -= 1 / animFrames
//     }
//     if (t < 0) {
//       t = 0
//     }
//     if (t > 1) {
//       t = 1
//     }

//     this.setState({
//       t,
//       raf: requestAnimationFrame(this._onAnimationFrame),
//       frame: frame + 1,
//     })
//   }
//   _on_mouseEnter() {
//     this.setState({ mouseOver: true })
//   }

//   _on_mouseLeave() {
//     this.setState({ mouseOver: false })
//   }

//   render() {
//     let backgroundColor = this.props.backgroundColor || colors.green600
//     let shadowColor = colors.indigo600

//     let { t } = this.state
//     let sinT = sineInOut(t)
//     let height = 0 - sinT * 20

//     let offset = sinT * 4
//     let boxShadow = 4 + offset

//     return (
//       <div
//         style={{
//           width: '300px',
//           height: '300px',
//           display: 'inline-block',
//           marginTop: `${4 - offset}px`,
//         }}
//         onMouseEnter={this._on_mouseEnter}
//         onMouseLeave={this._on_mouseLeave}
//       >
//         <div
//           style={{
//             width: '300px',
//             height: '300px',
//             display: 'inline-block',
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: backgroundColor,
//               margin: `10px`,
//               padding: '10px',
//               height: '260px',
//               borderRadius: '10px',
//               boxShadow: `${boxShadow}px ${boxShadow}px 2px ${shadowColor}`,
//             }}
//           >
//             <div style={{ color: 'white' }}>
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   height: '52px',
//                 }}
//               >
//                 {this.props.icon ? (
//                   <div style={{ marginRight: '10px' }}>
//                     <FontAwesome name={this.props.icon} size='4x' />
//                   </div>
//                 ) : null}
//                 {this.props.title ? (
//                   <div style={{ fontSize: '28px' }}>{this.props.title}</div>
//                 ) : null}
//               </div>
//               <div>{this.props.children}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
