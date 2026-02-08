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
                    label="Total Patients"
                    number={247}
                />
                <SidebarCard 
                    variant="waiting"
                    label="Waiting"
                    number={18}
                />
                <SidebarCard 
                    variant="in_consult"
                    label="In Consult"
                    number={5}
                />
                <SidebarCard 
                    variant="done"
                    label="Done"
                    number={224}
                />
                <SidebarCard 
                    variant="cancelled"
                    label="Cancelled"
                    number={22}
                />
            </div>
        </aside>
    )
}

export default Sidebar;