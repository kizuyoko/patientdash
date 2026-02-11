import PatientsTableRow from "./PatientsTableRow";
import { patients } from "../../data/fake_patients";

const PatientTableBody = () => {
    return (
        <tbody>
            {
              patients.map((patient) => (
                <PatientsTableRow 
                  key={patient.id} 
                  patient={patient} 
                />
              ))
            }
        </tbody>
    );
};

export default PatientTableBody;