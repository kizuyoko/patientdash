import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import SidebarCard from "./ui/SidebarCard";

const Sidebar = () => {
    return (
        <aside>
            <Heading level={1}>PatientDash</Heading>
            <Paragraph>Patient Management System</Paragraph>
            <div className="overview">
                <SidebarCard 
                    title="Total Patients"
                    number={247}
                />
                <SidebarCard 
                    variant="active"
                    title="Active Today"
                    number={18}
                />
                <SidebarCard 
                    variant="pending"
                    title="Pending"
                    number={5}
                />
                <SidebarCard 
                    variant="completed"
                    title="Completed"
                    number={224}
                />
            </div>
        </aside>
    )
}

export default Sidebar;