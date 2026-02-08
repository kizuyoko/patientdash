import type { PatientStatus } from "../../types/patient";

type StatusBadgeProps = {
  status: PatientStatus;
};

const baseClasses = "inline-flex px-3 py-1 text-xs font-medium rounded-full capitalize";
const statusClasses = {
    waiting: " bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)",
    in_consult: " bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)",
    done: " bg-(--color-bg-status-done) text-(--color-text-status-done)",
    cancelled: " bg-(--color-bg-status-cancelled) text-(--color-text-status-cancelled)",
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