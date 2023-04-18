import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kubbeh Cohen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kubbeh Cohen" />
        <p className="details">
          Great Israeli and Middle Eastern food. Address: 21765 Ventura blvd. Woodland Hills, CA 91364, Phone: (747) 242-1199
        </p>
      </main>
  
      <body>
        <img src="Menu20230416.jpg" width="400" height="309"></img>
      </body>

      <Footer />
    </div>
  )
}
