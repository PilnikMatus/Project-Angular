export interface Admin {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  log_repetation_unit: string;
  log_repetation_number: number;
  log_importance: number;
  token: string;
}
