const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.use(express.json());

app.listen(3001, () => console.log(`Server is running on port ${3001}`));
