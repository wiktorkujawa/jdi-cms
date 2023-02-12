import express from 'express';
import payload from 'payload';
import { mediaManagement } from "payload-cloudinary-plugin";

require('dotenv').config();
const app = express();

app.use(mediaManagement({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME
}));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here
  const PORT = process.env.PORT || 3000
  app.listen(PORT);
}

start();
