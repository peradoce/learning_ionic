import { Repository } from '../models/repository.interface';
import {USER_LIST} from './user.mocks';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 camera',
        description: 'This repository shows the usage of the camera functionality within Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository shows the usage of the SMS functionality within Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 GEOLOCATION',
        description: 'This repository shows the usage of the GEOLOCATION functionality within Ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 VIBRATION',
        description: 'This repository shows the usage of the VIBRATION functionality within Ionic 3',
        owner: USER_LIST[1]
    }
]

export const REPOSITORY_LIST = repositoryList;
