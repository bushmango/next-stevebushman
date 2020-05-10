import '../components/App.scss'
import '../components/home2/HomePageNew.scss'
import '../components/home2/AboutMe.scss'
import '../components/home2/WorkExperience.scss'

export default function MyApp(props: { Component: any; pageProps: any }) {
  let { Component, pageProps } = props
  return <Component {...pageProps} />
}
