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
                    text="Total Patients"
                    number={247}
                />
                <SidebarCard 
                    variant="active"
                    text="Active Today"
                    number={18}
                />
                <SidebarCard 
                    variant="pending"
                    text="Pending"
                    number={5}
                />
                <SidebarCard 
                    variant="completed"
                    text="Completed"
                    number={224}
                />
            </div>
        </aside>
    )
}

export default Sidebar;