import StatusBadge from "../ui/StatusBadge";
import type { Patient } from "../../types/patient";
import { generatePatientId, generateFullname, calculateAge } from '../../utilities/data';
import Modal from "../ui/Modal";
import { useState } from "react";
import PatientDetail from "../PatientDetail";

type PatientTableRowProps = {
    patient: Patient
};

const PatientTableRow = ({patient}: PatientTableRowProps) => {
    const [open, setOpen] = useState(false);

    const patientId = generatePatientId(patient.id);
    const fullName = generateFullname(patient.first_name, patient.last_name, patient.middle_name);
    const age = calculateAge(patient.birthday);

    const openPatientModal = () => {
        setOpen(true);
    };

    return (
        <>
            <tr onClick={openPatientModal}>
                <td>{patientId}</td>
                <td><b>{fullName}</b></td>
                <td>{age}</td>
                <td>
                    <StatusBadge status={patient.status} />
                </td>
                <td>
                    {!patient.nextAppointment ? "—" : patient.nextAppointment}
                </td>
                <td>{patient.condition}</td>
            </tr>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title={`${fullName} (${patientId})`}
            >
                <PatientDetail patient={patient} />
            </Modal>
        </>
    );
};

export default PatientTableRow;
