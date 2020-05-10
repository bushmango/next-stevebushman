export const Quote = (props: { text: string; author: string }) => {
  return (
    <blockquote>
      <div style={{ fontSize: '40px', display: 'inline-block' }}>
        {'\u201C'}
      </div>

      {props.text || 'a quote goes here'}

      <div style={{ textAlign: 'right' }}>
        <cite> &mdash; {props.author || 'Steve Bushman, probably'}</cite>
      </div>
    </blockquote>
  )
}
