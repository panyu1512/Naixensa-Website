import axios from 'axios';

export const registerRequest = async (email: string, name: string, last_name: string, password: string) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/users/register', {
        email,
        name,
        last_name,
        password,
    });
    return response;
}
