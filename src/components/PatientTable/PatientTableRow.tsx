import StatusBadge from "../ui/StatusBadge";
import type { Patient } from "../../types/patient";

type PatientTableRowProps = {
    patient: Patient
};

const PatientTableRow = ({patient}: PatientTableRowProps) => {
     const fullName = patient.middle_name
        ? `${patient.first_name} ${patient.middle_name} ${patient.last_name}`
        : `${patient.first_name} ${patient.last_name}`;

    return (
        <tr>
            <td>{patient.id}</td>
            <td><b>{fullName}</b></td>
            <td>{patient.age}</td>
            <td>
                <StatusBadge status={patient.status} />
            </td>
            <td>{patient.lastVisit}</td>
            <td>{patient.condition}</td>
        </tr>
    );
};

export default PatientTableRow;
