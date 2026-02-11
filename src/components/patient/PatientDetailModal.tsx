import type { Patient } from "../../types/patient";
import { generatePatientId, generateFullname } from '../../utilities/data';
import Heading from "../ui/Heading";
import PatientBasicInfoSection from "./PatientBasicInfoSection";

type PatientProps = {
    patient: Patient
}

const PatientDetailModal = ({ patient }: PatientProps) => {
    const patientId = generatePatientId(patient.id);
    const fullName = generateFullname(patient.first_name, patient.last_name, patient.middle_name);    

    return (
        <section className="patient-modal">
            <Heading>
                {fullName}  
                <span className="pl-3 text-sm font-normal">
                    {patientId}
                </span>
            </Heading>
            <PatientBasicInfoSection patient={patient} />
            <Heading level={3}>Contact Information</Heading>
            <Heading level={3}>Medical Information</Heading>
            <Heading level={3}>Visit History</Heading>            
        </section>
    );
};

export default PatientDetailModal;

