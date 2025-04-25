# 🚗 AutoGenius - AI-Powered Car Listing Platform

AutoGenius is a full-stack car listing platform built with Next.js 14, ShadCN UI, PostgreSQL, and AI integrations using Gemini API. It enables users to discover, compare, and book test drives for cars with the help of intelligent search and image recognition capabilities.


## Screenshots

- *Landing Page*
<img width="1440" alt="Screenshot 2025-04-25 at 4 54 22 PM" src="https://github.com/user-attachments/assets/0bf6b871-afaf-48b8-b1d7-9ffca4420668" />

- - - - 

- *Car Gallery*
<img width="1440" alt="Screenshot 2025-04-25 at 5 15 40 PM" src="https://github.com/user-attachments/assets/5a5cc612-0bc0-402f-959e-0e54e4d6713a" />

- - - - 

- *Admin Dashboard*
<img width="1440" alt="Screenshot 2025-04-25 at 5 18 16 PM" src="https://github.com/user-attachments/assets/e5e06399-3644-4494-b699-8ae960f052fd" />


## Clone

- **Clone project**

```bash
    git clone https://github.com/vermaadigit/AutoGenius
```

- **Move to Directory**
```bash
    cd AutoGenius
```


## Configuration - ENV File

Create a `.env` file in the root folder of your project. Update it following the convention of the `.env.example` file. Here's an example :-

```bash
    
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up

DATABASE_URL=
DIRECT_URL=

ARCJET_KEY=

GEMINI_API_KEY = 

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=


```

## Prisma - Schema Model

![AutoGenius DB Model @Prisma](https://github.com/user-attachments/assets/1c80c2af-cdfb-4d12-8fbd-23afd4907418)

## Install Dependencies

To Install all dependencies to this project

```bash
   npm i
```
or

```bash
   npm install
```

## Technologies

- **Web-app**: NextJS, ShadCN-UI, Tailwind-CSS
- **Database**: Prisma, Inngest, Supabase
- **API**: Gemini API , Arcjet, Supabase
- **Authentication**: Clerk

## Deployment

To deploy this project to run

```bash
  npm run dev
```

To Migrate Database Schema 

```bash
   npx prisma migrate dev --name create-models
```


