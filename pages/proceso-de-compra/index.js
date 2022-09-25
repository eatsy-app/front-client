import Head from 'next/head'
import { useContext } from 'react'
import { Checkout } from '../../container/checkout'
import { Context } from '../../context'

export default function ProcessView () {
  const { setAlertBox, setCountItemProduct, locationStr, setModalLocation } = useContext(Context)
  return (
    <div >
      <Head>
        <title>Delibery Proceso  </title>
        <meta content='Generated by create next app' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      <Checkout
        locationStr={locationStr}
        setAlertBox={setAlertBox}
        setCountItemProduct={setCountItemProduct}
        setModalLocation={setModalLocation}
      />
    </div>
  )
}

// export const getServerSideProps = withSession(async function ({ req, res }) {
//   const user = req?.session?.get('user')
//   if (!user) {
//     res.setHeader('location', '/entrar')
//     res.statusCode = 302
//     res.end()
//     return { props: {} }
//   }
//   if (!req.cookies[process.env.SESSION_NAME]) return { redirect: { destination: '/entrar' } }

//   return {
//     props: {
//     }
//   }
// }
// )
