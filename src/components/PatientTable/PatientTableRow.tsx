import StatusBadge from "../ui/StatusBadge";
import type { Patient } from "../../types/patient";

type PatientTableRowProps = {
    patient: Patient
};

const PatientTableRow = ({patient}: PatientTableRowProps) => {
    return (
        <tr>
            <td>{patient.id}</td>
            <td><b>{patient.name}</b></td>
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
