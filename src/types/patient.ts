export type PatientStatus = "waiting" | "consult" | "done" | "cancelled";
export type Gender = 'male' | 'female';
export type BloodType = 'A'| 'B' | 'O' | 'AB';

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  status: PatientStatus;
  phone: string;
  email: string;
  address: string;
  lastVisit: string; // ISO or display string for now
  nextAppointment: string;// ISO or display string for now
  doctor: string;
  condition: string;
  allergies: string; // Later array
  madications: string;
};
