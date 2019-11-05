import React from 'react'
import Helmet from 'react-helmet'


export default () => (
  <Helmet>
    <title>Хормигон</title>

    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="-1" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />

    <meta property="og:url" content="https://hormigon.com" />
	  <meta property="og:title" content="Хормигон" />
	  <meta property="og:description" content="Завод редких ж/б и м/б конструкций для дорожного строительства" />
	  <meta property="og:type" content="website" />
    <meta property="og:image" content="%PUBLIC_URL%/static/media/og.png" />
  </Helmet>
)
