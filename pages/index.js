import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Retool from 'react-retool';

const sample = { name: 'Sample data' }

const dummyOnData = (data) => {
  // do nothing
}

export default function Home() {
  return (
    <div className="container">
      {/* <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer /> */}
      
      <Retool 
        url="https://antonyip.retool.com/embedded/public/cf8c05e1-b396-4fb7-99a1-9b3746f8a5d0"
        data={sample} onData={dummyOnData}
      />
    </div>
  )
}
