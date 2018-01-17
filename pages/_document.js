import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import JssProvider from 'react-jss/lib/JssProvider'
import getContext from '../styles'

export default class MainDocument extends Document {

  static getInitialProps({renderPage}) {
    const context = getContext()

    const page = renderPage(Component => props => {
      return (
        <JssProvider
          registry={context.sheetsRegistry}
          jss={context.jss}
          generateClassName={context.generateClassName}>
            <Component {...props}/>
        </JssProvider>
      )
    })

    return {
      ...page,
      stylesContext: context,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{__html: context.sheetsRegistry.toString()}}/>
      )
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>React True or False</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
          <style>{`body{margin: 0;}`}</style>
        </Head>
        <body className="front-page">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}