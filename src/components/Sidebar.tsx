import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";

const Sidebar = () => {
    return (
        <aside>
            <Heading level={1}>PatientDash</Heading>
            <Paragraph>Patient Management System</Paragraph>
            <div className="overview">
                <div className="card">
                    <p className="card-title">Total Patients</p>
                    <p className="card-number">247</p>
                </div>
                <div className="card active">
                    <p className="card-title">Active Today</p>
                    <p className="card-number">18</p>
                </div>
                <div className="card pending">
                    <p className="card-title">Pending</p>
                    <p className="card-number">5</p>
                </div>
                <div className="card completed">
                    <p className="card-title">Completed</p>
                    <p className="card-number">224</p>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;