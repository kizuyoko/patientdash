import PatientTable from './components/PatientTable';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Heading from './components/ui/Heading';
import Paragraph from './components/ui/Paragraph';

function App() {

  return (
    <section className='body'>
      <Sidebar />
      <main>
        <Heading>Patient List</Heading>
        <Paragraph>Overview of all registered patients</Paragraph>
        <PatientTable />
        <Footer />
      </main>
    </section>
  )
}

export default App
