import cloudinary from "./cloud_config.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the video file in the public directory
const videoPath = path.join(__dirname, 'public', 'Nathan Video 2.mp4');

console.log('Attempting to upload:', videoPath);

cloudinary.uploader.upload(videoPath, {
  resource_type: 'video',
  folder: 'firky-bot/videos'
}, (error, result) => {
  if (error) {
    console.error('Upload error:', error);
  } else {
    console.log('Upload successful!');
    console.log('Video URL:', result.secure_url);
  }
});

