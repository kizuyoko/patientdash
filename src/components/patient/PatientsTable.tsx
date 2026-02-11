import PatientsTableBody from "./PatientsTableBody";
import PatientsTableHead from "./PatientsTableHead";


const PatientsTable = () => {
    return (
        <table>
          <PatientsTableHead />
          <PatientsTableBody />
        </table>
    )
}

export default PatientsTable;