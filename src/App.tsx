import PatientTable from './components/PatientTable';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Heading from './components/ui/Heading';

function App() {

  return (
    <section className='body'>
      <Sidebar />
      <main>
        <Heading>Patient List</Heading>
        <PatientTable />
        <Footer />
      </main>
    </section>
  )
}

export default App
