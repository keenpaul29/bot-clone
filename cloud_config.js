<<<<<<< HEAD
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.CLOUD_NAME || !process.env.CLOUD_API_KEY || !process.env.CLOUD_API_SECRET) {
    throw new Error('Missing required Cloudinary environment variables');
}

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME.trim(),
    api_key: process.env.CLOUD_API_KEY.trim(),
    api_secret: process.env.CLOUD_API_SECRET.trim()
});

// Test the configuration
console.log('Cloudinary configured with cloud name:', process.env.CLOUD_NAME.trim());

export default cloudinary;
=======
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.CLOUD_NAME || !process.env.CLOUD_API_KEY || !process.env.CLOUD_API_SECRET) {
    throw new Error('Missing required Cloudinary environment variables');
}

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME.trim(),
    api_key: process.env.CLOUD_API_KEY.trim(),
    api_secret: process.env.CLOUD_API_SECRET.trim()
});

// Test the configuration
console.log('Cloudinary configured with cloud name:', process.env.CLOUD_NAME.trim());

export default cloudinary;
>>>>>>> 3ef8bb720c2d7837528b3da24a8b7f26ff3eeafa
