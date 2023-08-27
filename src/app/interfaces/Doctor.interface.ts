import { DoctorSpecialization } from "../enums/DoctorSpecialization.enum";

export interface Doctor {
    id: number;
    doctorName: string;
    specialization: DoctorSpecialization;
  }