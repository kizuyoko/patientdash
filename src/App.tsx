import PatientTable from './components/PatientTable';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {

  return (
    <section className='body'>
      <Sidebar />
      <main>
        <h2>Patient List</h2>
        <PatientTable />
        <Footer />
      </main>
    </section>
  )
}

export default App
