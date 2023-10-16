export interface PatientData {
  patient: {
    name: string;
    age: number;
    sex: string;
  };
  daysInHospital: number;
  diet: string;
}

export interface PatientsStats {
  nPatients: number;
  nAdults: number;
  nDiabeticMen: number;
  totalDaysInHospital: number;
  averageAgeWomen: number;
}
