import { IConfig } from 'src/app/models/httpmodels/config.interface';

export interface IConfigState {
    config: IConfig;
}

export const initialConfigState: IConfigState ={
    config:null
}