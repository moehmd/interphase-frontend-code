import { v4 as uuidv4 } from 'uuid';
import { Author } from "./author";

export class Blog {
    id?: any;
    category?: string;
    post_date?: string;
    image_url?: string;
    title?: string;
    banner?: string;
    body?: string;
    footing?: string;
    authorName?: string;
    author_title?: string;
    authorImage?: string;
    authorFacebook?: string;
    authorTwitter?: string;
    authorLinkedIn?: string
    //author: Author
}