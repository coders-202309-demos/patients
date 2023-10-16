import { type PatientData, type PatientsStats } from "../types";

const getPatientsStats = (patientsData: PatientData[]): PatientsStats => {
  const patientsStats: PatientsStats = {
    nPatients: patientsData.length,
    nAdults: patientsData.filter((patientData) => patientData.patient.age >= 18)
      .length,
    nDiabeticMen: patientsData.filter(
      (patientData) =>
        patientData.patient.sex === "M" &&
        patientData.diet.toLowerCase() === "diabetes"
    ).length,
    averageAgeWomen: patientsData
      .filter((patientData) => patientData.patient.sex === "W")
      .reduce(
        (accumulator, patientData, _position, womenPatientData) =>
          accumulator + patientData.patient.age / womenPatientData.length,
        0
      ),
    totalDaysInHospital: patientsData.reduce(
      (accumulator, patientData) => accumulator + patientData.daysInHospital,
      0
    ),
  };

  return patientsStats;
};

export default getPatientsStats;
