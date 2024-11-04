import { http } from './httpFakeStore'
import { jewel } from '@/app/Jewelry/page';

export const getProducts = async ():Promise<jewel[]> => {
  try {
    const response = await http.get('/category/jewelery');

    return response.data; 
  } catch (error) {
    throw error; 
  }
};
