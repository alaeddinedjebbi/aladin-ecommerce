import dotenv from 'dotenv';

dotenv.config();

export default {
  // eslint-disable-next-line no-undef
  PORT: process.env.PORT || 5000,
  // eslint-disable-next-line no-undef
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/Aladin',
  // eslint-disable-next-line no-undef
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  // eslint-disable-next-line no-undef
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  // eslint-disable-next-line no-undef
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  // eslint-disable-next-line no-undef
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
