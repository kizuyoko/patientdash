import PatientTableRow from "./PatientTableRow";
import { patients } from "../../data/fake_patients";

const PatientTableBody = () => {
    return (
        <tbody>
            {
              patients.map((patient) => (
                <PatientTableRow 
                  key={patient.id} 
                  patient={patient} 
                />
              ))
            }
        </tbody>
    );
};

export default PatientTableBody;