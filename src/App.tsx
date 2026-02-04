import PatientTable from './components/PatientTable';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <section className='body'>
      <Sidebar />
      <main>
        <Header />
        <PatientTable />
        <Footer />
      </main>
    </section>
  )
}

export default App
