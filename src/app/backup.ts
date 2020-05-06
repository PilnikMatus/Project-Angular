export interface Backup {
  id: number;
  id_admin: number;
  name: string;
  backup_type: string;
  format_type: string;
  last_possible_backup_date: Date;
  active: boolean;
}
