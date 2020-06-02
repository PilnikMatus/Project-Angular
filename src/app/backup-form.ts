import {Source} from './source';
import {Target} from './target';
import {Time} from './time';
import {Client} from './client';

export interface BackupForm {
  id: number;
  id_admin: number;
  name: string;
  backup_type: string;
  format_type: string;
  last_possible_backup_date: Date;
  active: boolean;
  backup_source: Array<Source>;
  backup_target: Array<Target>;
  backup_time: Array<Time>;
  clients: Array<Client>;
}
