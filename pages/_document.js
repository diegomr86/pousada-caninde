// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta content='Pousada Canindé - Chapada dos Veadeiros' name='description'/>
          <meta content='Pousada Canindé, Vila de são jorge, Chapada dos Veadeiros, Pousdas Alto Paraíso, Pousadas Chapada dos Veadeiros, Cerrado' name='keywords'/>
          <meta content='!' name='fragment'/>

          <meta content='pt_BR' property='og:locale'/>
          <meta content='POusada Canindé' property='og:site_name'/>
          <meta content='POusada Canindé | Vila de São Jorge - Chapada dos Veadeiros' property='og:title'/>
          <meta content='NO CORAÇÃO DA CHAPADA DOS VEADEIROS, SEU REFÚGIO ESTÁ DE PORTAS ABERTAS' property='og:description'/>
          <meta content='http://pousadacaninde.com.br/' property='og:url'/>
          <meta content='http://pousadacaninde.com.br/static/cover.png' property='og:image'/>
          <meta content='website' property='og:type'/>

          <meta content='summary_large_image' name='twitter:card'/>

          <meta content='POusada Canindé | Alto Paraíso - Chapada dos Veadeiros' itemprop='name'/>
          <meta content='NO CORAÇÃO DA CHAPADA DOS VEADEIROS, SEU REFÚGIO ESTÁ DE PORTAS ABERTAS' itemprop='description'/>
          <meta content='http://pousadacaninde.com.br/static/cover.png' property='image'/>



          <link href="https://fonts.googleapis.com/css?family=Mouse+Memoirs" rel="stylesheet" />
          <link href="/static/effects.css" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="theme-color" content={'#005FB6'} />
          <link rel="manifest" href="static/manifest.json" />
          <script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyBsr3RFIuUoYkvrarEThfbq_beHu97AgXI&sensor=false"></script>
          <style>{`
          body, html {
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            margin: 0; 
          }
          h2 {
            font-size: 60px;
            font-family: Mouse Memoirs, sans-serif;
            color: #005FB6;
            font-weight: 400;
            margin: 30px;
          }
          .container {
            margin: auto;
            width: 1170px;
          }
          h3 {
            font-family: Mouse Memoirs, sans-serif;
            color: #005FB6;
            font-weight: 400;
            font-size: 38px;
          }
          button {
            border: none;
            shadow-box: none;
          }
          a {
            text-decoration: none;
            color: #000;
            cursor: pointer;
          }
          .link {
            color: #fff;
            font-family: Mouse Memoirs, sans-serif;
            font-size: 30px;
            font-weight: 400;
            color: #fff;
          }
          .link-small {
            color: #000;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          .slick-slide {
            font-weight: 300;
          }
          @media(max-width: 1200px) {
            .container {
              width: 992px;
              margin: auto;
            }
          }
          @media(max-width: 1024px) {
            .container {
              width: 100%;
              margin: auto;
            }
          }
          @media(max-width: 768px) {
            .pic img {
              width: 130px;
              margin-top: -34px;
            }
          }
          `}</style>
        </Head>
        <body className="custom_class">
         {this.props.customValue}
         <Main />
         <NextScript />
        </body>
      </html>
    )
  }
}