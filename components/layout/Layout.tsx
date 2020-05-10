import Head from 'next/head'
import React from 'react'
import { CenterPanel } from './CenterPanel-sidecar'
import { ColumnTwo } from './ColumnTwo-sidecar'
import css from './Layout.module.scss'

export const Layout = (props: { children: React.ReactNode; title: string }) => {
  return (
    <div className={css.layout}>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <div>
        <CenterPanel>
          <ColumnTwo>
            <div>
              SteveBushman.com <br />
              Fine software engineers and designers
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
              <div>&copy; Steve Bushman</div>
              <div>steve@stevebushman.com</div>
            </ColumnTwo>
          </div>
        </CenterPanel>
      </div>
    </div>
  )
}
