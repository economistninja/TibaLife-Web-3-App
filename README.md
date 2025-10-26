🏥 TibaLife Intergenerational Health Platform

A comprehensive, hybrid MERN (MongoDB, Express, React, Node.js) web application designed to manage clinical workflows, patient data, and project oversight for B2B multi-tenant healthcare operations.

This platform emphasizes data integrity and interoperability, aligning with the sustainable development goal (SDG) for Good Health and Well-being (SDG 3) by leveraging modern standards and immutable auditing. The backend is built entirely with TypeScript.

✨ Key Features
B2B Multi-Tenancy: Secure, workspace-based isolation for different client organizations (hospitals, clinics, research groups).

Clinical Interoperability: Data modeling based on FHIR (Fast Healthcare Interoperability Resources) and openEHR standards for robust and compliant health record management.

Immutable Audit Tracking: Anti-Microbial Resistance (AMR) audit logs are secured using Blockchain Integration (via an RPC connection to a secure ledger) to provide an unchangeable record for regulatory compliance.

Modern Stack: Built on a robust MERN foundation utilizing TypeScript and Zod for end-to-end type safety and validation.

🛠️ Tech Stack
Component Technology Role Backend
Node.js, Express, TypeScriptRESTful API, Business Logic, Security (Passport, Zod)DatabaseMongoDB & Mongoose Flexible NoSQL Data Storage and Object Data Modeling Data Standards FHIR & openEHR Standardized clinical data exchange and storage structure Audit Layer Blockchain (EVM-compatible)Immutable, verifiable ledger for AMR audit trails FrontendReact (To be initialized)Single Page Application (SPA) for UI/UX

🚀 Getting Started
These instructions will get a copy of the project running on your local machine for development and testing purposes.

Prerequisites
You must have the following software installed:

Node.js (v18+) and npm (v8+)

MongoDB (locally running or a cloud instance like MongoDB Atlas)

Git

(Optional but Recommended for Blockchain): A local blockchain client like Ganache running on http://127.0.0.1:7545.

Installation and Setup (Backend)
Clone the Repository:

Bash

git clone [YOUR-REPO-URL] TibaLife
cd TibaLife/backend
Install Dependencies:

Bash

npm install
Configure Environment Variables: Create a file named .env in the backend/ directory based on the provided .env.example. Replace the placeholder values with your specific keys, connection strings, and server configuration:

Bash

cp .env.example .env
# Edit the .env file now
Seed the Database (Initial Roles/Permissions): This step populates the database with essential initial roles (Owner, Admin, Member) required for the multi-tenant architecture.

Bash

npm run seed

Run the Server: Start the backend server in development mode. Changes to your .ts files will automatically restart the server.

Bash

npm run dev
The server should now be running on http://localhost:5000 (or the port defined in your .env file).

🗂️ Backend Architecture
The server is structured using a modular, clean architecture based on the Separation of Concerns principle:

backend/
├── src/
│   ├── config/          # Environment configuration, database connection, etc.
│   ├── controllers/     # Request handling, calling services
│   ├── models/          # Mongoose Schemas (User, Patient, HealthRecord, AMR, etc.)
│   ├── routes/          # API endpoints definition
│   ├── services/        # CORE BUSINESS LOGIC (e.g., FHIR processing, Blockchain interaction)
│   ├── middleware/      # Authentication, error handling (e.g., asyncHandler)
│   ├── utils/           # Helper functions (e.g., getEnv.ts, custom errors)
│   └── index.ts         # Server entry point
└── .env.example