import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";

const Header = () => {
    const abc = () => {
        alert("New Patient modal is coming soon!");
    }

    return (
        <header>
            <div className="flex justify-between items-end">
                <div>
                    <Heading>Patient List</Heading>
                    <Paragraph>Overview of all registered patients</Paragraph>
                </div>
                <Button
                    onClick={abc}
                >New</Button>
            </div>
        </header>
    )
}

export default Header;