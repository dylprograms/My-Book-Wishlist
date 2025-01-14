import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import db from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Fix ES Module issue with __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Fix: Correct path for production build files
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});





/*
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import db from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Fix for ES Module __dirname usage
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files correctly
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});









/*
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url'; // Import for __dirname workaround
import db from './config/connection.js';
import routes from './routes/index.js';

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

*/






/*
 
import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});



*/