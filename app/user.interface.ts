export interface User{
    name: String;
    address?:{
        street?: string;
        postcode?: string;
    }
}