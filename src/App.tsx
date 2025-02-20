import './App.css'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Footer } from './components/Footer'


function App() {
  //A cím megváltoztatásához a Helmet komponenst használjuk
  return (
    <>
        <Helmet>
            <title>Growpass</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="keywords" content="Growpass" />
            <meta name="author" content="Kormos Áron" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Growpass" />
        <meta name="description" content="Growpass" />
        </Helmet>

        <main className=''>
          <Outlet />

        </main>
     <Footer/>

    </>
  )
}

export default App