import PatientTableBody from "./PatientTableBody";
import PatientTableHead from "./PatientTableHead";


const PatientTable = () => {
    return (
        <table>
          <PatientTableHead />
          <PatientTableBody />
        </table>
    )
}

export default PatientTable;