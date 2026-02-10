import type { Patient } from "../types/patient";
import { calculateAge } from '../utilities/data';
import StatusBadge from "./ui/StatusBadge";
import Heading from "./ui/Heading";

type PatientProps = {
    patient: Patient
}

const PatientDetail = ({ patient }: PatientProps) => {
    const age = calculateAge(patient.birthday);
    const ageText = age === 0 
        ? 'Less than 1 year' 
        : `${age} year${age === 1 ? '' : 's'}`;

    return (
        <>
            <Heading level={3}>Basic Information</Heading>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Age</p>
                    <p className="text-lg font-semibold text-gray-900">{ageText}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Gender</p>
                    <p className="text-lg font-semibold text-gray-900 capitalize">{patient.gender}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Blood Type</p>
                    <p className="text-lg font-semibold text-gray-900">{patient.bloodType}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Status</p>
                    <StatusBadge status={patient.status} />
                </div>
            </div>
            <Heading level={3}>Contact Information</Heading>
            <Heading level={3}>Medical Information</Heading>
            <Heading level={3}>Visit History</Heading>            
        </>
    );
};

export default PatientDetail;

