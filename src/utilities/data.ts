export const generatePatientId = (id: number): string => `PT-${String(id).padStart(4, "0")}`;

export const calculateAge = (birthday: string): number => {
    const birthDate = new Date(birthday); 
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}