export interface NewUserApiRequest {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
    dob: string;
    address: string;
  };
  occupancy: {
    title: string;
    company: string;
    salary: number;
    role: string;
  };
}

export interface NewUserInput {
  email: string | undefined;
  password: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  dob: string | undefined;
  address: string | undefined;
  title: string | undefined;
  company: string | undefined;
  salary: number | undefined;
  role: string | undefined;
  confirmPassword: string | undefined;
}

// export interface EditUserInput {
//   _id: string;
//   email?: string;
//   password?: string;
//   // about?: string;
//   // address?: string;
//   // title?: string;
//   // role?: string;
//   // salary?: number;
//   // company?: string;
// }
// export interface UpdateRequest {
//   _id: string;
//   email?: string;
//   password?: string;
//   'profile.about'?: string;
//   'profile.address'?: string;
//   'occupancy.title'?: string;
//   'occupancy.role'?: string;
//   'occupancy.salary'?: number;
//   'occupancy.company'?: string;
// }

export interface ExistingUserInput {
  email: string | undefined;
  password: string | undefined;
}

export interface errorInfo {
  title: string;
  message: string;
  resolution: string;
}
