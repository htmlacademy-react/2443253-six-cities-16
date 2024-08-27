import { User } from '../types/user';

//Моки для тестов
export const mockUser: User = {
  id: Math.random(),
  name : 'Дима',
  email : 'Diman@gmail.com',
  token: '',
  avatarUrl:'',
  isPro:false
};
