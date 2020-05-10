export const Link = (props: {
  children: React.ReactNode
  to: string
  style?: React.CSSProperties
}) => {
  return (
    <a href={props.to} style={props.style}>
      {props.children}
    </a>
    // <Link to='/contact-us' style={{ textDecoration: 'none' }}>
  )
}
