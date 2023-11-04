export interface User {
    id?: number;
    avatar: File | null;
    email: string;
    name: string;
    last_name: string;
};

export interface Token {
    user_id: number;
    exp: number;
    is_staff: boolean;
    email: string;
    name: string;
    last_name: string;
};