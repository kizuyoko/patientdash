import type { PatientStatus } from "../../types/patient";

type StatusBadgeProps = {
  status: PatientStatus;
};

const baseClasses = "inline-flex px-3 py-1 text-xs font-medium rounded-full capitalize";
const statusClasses = {
    active: " bg-(--color-bg-status-active) text-(--color-text-status-active)",
    pending: " bg-(--color-bg-status-pending) text-(--color-text-status-pending)",
    completed: " bg-(--color-bg-status-completed) text-(--color-text-status-completed)",
}


function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
            className={`${baseClasses} ${statusClasses[status]}`}
        >
            {status}
        </span>
    );
}

export default StatusBadge;