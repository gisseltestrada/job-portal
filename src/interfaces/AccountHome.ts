export interface SalaryResponse {
  message: string;
  success: boolean;
  user: SalaryByJob;
}

export interface SalaryByJob {
  average: string;
  salaries: number[];
}

export interface SalaryErrorResponse {
  message: string;
  success: boolean;
}
