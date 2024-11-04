import { http } from '../service/httpBooks'
import { book } from '@/app/api/books/db';

export const getProducts = async ():Promise<book[]> => {
  try {
    const response = await http.get<book[]>(''); 
    return response.data; 
  } catch (error) {
    throw error; 
  }
};
