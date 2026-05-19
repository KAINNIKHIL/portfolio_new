# Portfolio Setup Guide

## Environment Variables

This portfolio currently does NOT require a `.env` file unless you add:

* EmailJS
* Appwrite
* APIs
* Analytics
* Backend URLs

---

# Recommended `.env` Setup (Future Ready)

Create:

```txt
.env
```

Example:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

# Important

Because this project uses Vite:

All environment variables MUST start with:

```txt
VITE_
```

Example:

```env
VITE_API_URL=https://example.com
```

---

# Add `.env` To `.gitignore`

Inside `.gitignore`:

```txt
.env
```

Never push secret keys publicly.

---

# README.md

````md
# Nikhil Portfolio

A modern full-stack developer portfolio built using React, Tailwind CSS, and Framer Motion.

---

## Live Demo

Add your deployed Vercel link here.

---

## Features

- Modern responsive UI
- Smooth animations using Framer Motion
- Lottie developer animation
- Responsive design
- Interactive project cards
- Professional contact section
- Optimized performance

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lottie React / dotLottie

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-react.git
````

Move into the project:

```bash
cd portfolio-react
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Build For Production

```bash
npm run build
```

---

## Folder Structure

```txt
src/
 ├── assets/
 ├── components/
 ├── App.jsx
 ├── main.jsx
```

---

## Deployment

Deployed using Vercel.

---

## Author

Nikhil Kaintura

GitHub:
[https://github.com/KAINNIKHIL](https://github.com/KAINNIKHIL)






