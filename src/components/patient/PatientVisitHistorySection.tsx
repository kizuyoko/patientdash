import Heading from "../ui/Heading";
import type { Patient } from "../../types/patient";

type PatientProps = {
    patient: Patient
}

const PatientVisitHistorySection = ({ patient }: PatientProps) => {
    return (
        <section>
            <Heading level={3}>Medical Information</Heading>
            <div className="card">
                <p className="card-label">Age</p>
                <p className="card-text">{patient.birthday}</p>
            </div>
        </section>
    );
};

export default PatientVisitHistorySection;