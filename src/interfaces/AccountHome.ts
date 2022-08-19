export interface SalaryResponse {
  occupancy: string | null;
  message: string;
  success: boolean;
  user: SalaryByJob;
}

export interface SalaryByJob {
  occupancy: string;
  average: string;
  salary: number[];
}

export interface User {
  _id: string | undefined;
  city: string | undefined;
  phone: string | undefined;
  password: string | undefined;
  email: string | undefined;
  site: string | undefined;
  gender: string | undefined;
  experience: string | undefined;
  pronouns: string | undefined;
  profile: {
    name: string | undefined;
    about: string | undefined;
    address: string | undefined;
    dob: string | undefined;
  };
  occupancy: {
    company: string | undefined;
    location: string | undefined;
    salary: string | undefined;
    title: string | undefined;
  };
  previous: {
    prevcompany: string | undefined;
    prevlocation: string | undefined;
    prevsalary: string | undefined;
  };
  skills: Skills;
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
  skills: [] | undefined;
}

export interface EditForm {
  _id: string;
  'profile.name': string | undefined;
  email: string | undefined;
  password: string | undefined;
  'profile.dob': string | undefined;
  'profile.about': string | undefined;
  'profile.address': string | undefined;
  'occupancy.title': string | undefined;
  role: string | undefined;
  'occupancy.salary': number | undefined;
  'occupancy.company': string | undefined;
  'occupancy.location': string | undefined;
  city: string | undefined;
  experience: number | undefined;
  phone: number | undefined;
  site: string | undefined;
  gender: string | undefined;
  pronouns: string | undefined;
  skills: Skills | undefined;
  skill1: string | undefined;
  skill2: string | undefined;
  skill3: string | undefined;
  skill4: string | undefined;
  skill5: string | undefined;
  'previous.prevcompany': string | undefined;
  'previous.prevlocation': string | undefined;
  'previous.prevsalary': number | undefined;
  skillsArr: [] | undefined;
}

export interface Skills {
  skill1?: string | undefined;
  skill2?: string | undefined;
  skill3?: string | undefined;
  skill4?: string | undefined;
  skill5?: string | undefined;
}

export const INIT_FORM: EditForm = {
  _id: '',
  'profile.name': undefined,
  email: undefined,
  password: undefined,
  'profile.dob': undefined,
  'profile.about': undefined,
  'profile.address': undefined,
  'occupancy.title': undefined,
  role: undefined,
  'occupancy.salary': undefined,
  'occupancy.company': undefined,
  'occupancy.location': undefined,
  city: undefined,
  experience: undefined,
  phone: undefined,
  site: undefined,
  gender: undefined,
  pronouns: undefined,
  skills: undefined,
  skill1: undefined,
  skill2: undefined,
  skill3: undefined,
  skill4: undefined,
  skill5: undefined,
  'previous.prevcompany': undefined,
  'previous.prevlocation': undefined,
  'previous.prevsalary': undefined,
  skillsArr: undefined,
};
