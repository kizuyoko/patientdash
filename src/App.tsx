import PatientTable from './components/patient/PatientsTable';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { patients } from './data/fake_patients';

function App() {
  
  return (
    <section className='body'>
      <Sidebar patients={patients} />
      <main>
        <Header />
        <PatientTable patients={patients} />
        <Footer />
      </main>
    </section>
  )
}

export default App
