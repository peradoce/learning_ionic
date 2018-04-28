import {User} from '../models/user.interface';

const userList: User[] = [
    {
        name: 'Gualter Perinho',
        company: 'PeraWebLinux',
        location: 'Vila do Porto',
        bio: 'I am a programmer', 
        avatar_url: 'https://www.mycustomer.com/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png',
        email: 'gg@gg.com'
    },
    {
        name: 'Marcelo Amigo da Deprê',
        company: 'OtakuLife',
        location: 'Canto da amizade',
        bio: 'Gosto de comer miojo', 
        avatar_url: 'https://www.mycustomer.com/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png',
        email: 'mc@mc.com'
    }
]

export const USER_LIST = userList;