export interface SalaryResponse {
    message: string;
    success: boolean;
    user: SalaryByJob;
}

export interface SalaryByJob{
    average: string;
    salary: number[];
}

export interface ProfileResponse {
  _id: string;
  email: string | undefined;
  password: string | undefined;
  about: string | undefined;
  address: string | undefined;
  title: string | undefined;
  role: string | undefined;
  salary: number | undefined;
  company: string | undefined;
  location: string | undefined;
  city: string | undefined;
  experience: number | undefined;
  phone: number | undefined;
  site: string | undefined;
  gender: string | undefined;
  pronouns: string | undefined;
  skill1: string | undefined;
  skill2: string | undefined;
  skill3: string | undefined;
  skill4: string | undefined;
  skill5: string | undefined;
  prevcompany: string | undefined;
  prevlocation: string | undefined;
  prevsalary: number | undefined;
}