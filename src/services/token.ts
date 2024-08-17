import { HARDCORE_TOKEN } from '../const';


export type Token = string;


export const getToken = (): Token => {
  const token = localStorage.getItem(HARDCORE_TOKEN);
  return token ?? '';

};


export const saveToken = (token: Token): void => {
  localStorage.setItem(HARDCORE_TOKEN, token);
};


export const dropToken = (): void => {
  localStorage.removeItem(HARDCORE_TOKEN);
};
