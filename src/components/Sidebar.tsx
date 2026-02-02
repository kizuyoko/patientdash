const Sidebar = () => {
    return (
        <aside>
            <h1>PatientDash</h1>
            <p>Patient Management System</p>
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