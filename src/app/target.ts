export interface Target {
  id: number;
  id_backup: number;
  config: {
    target_type: string;
    username: string;
    password: string;
    server: string;
    port: number;
    path: string;
  };
}
