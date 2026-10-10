# Nikhil Kaintura — Developer Portfolio

A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Showcases my projects, technical skills, and contact information.

## Live Demo

[View Portfolio](https://nikhilkaintura.vercel.app/)

## Features

- Responsive design for mobile, tablet, and desktop
- Midnight Blue and Cyan visual theme
- Smooth animations using Framer Motion
- Developer animation using Lottie
- Project cards with GitHub and live demo links
- Contact form integrated with EmailJS
- Toast notifications for contact form feedback
- Social links for GitHub and LinkedIn

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Lottie React / dotLottie
- EmailJS
- React Toastify

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/KAINNIKHIL/portfolio-react.git
```

Move into the project directory:

```bash
cd portfolio-react
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and configure your EmailJS variables:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
portfolio/
├── public/
│   ├── Developer.lottie
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

*Note: The structure above is representative. Adjust it to match the actual files in your repository.*

## Deployment

Deployed with [Vercel](https://vercel.com/).

To deploy your own version, import your GitHub repository into Vercel and configure the required environment variables in the project's settings.

## Author

**Nikhil Kaintura**

- GitHub: [KAINNIKHIL](https://github.com/KAINNIKHIL)
- LinkedIn: [Nikhil Singh Kaintura](https://www.linkedin.com/in/nikhil-singh-kaintura/)
- Portfolio: [nikhilkaintura.vercel.app](https://nikhilkaintura.vercel.app/)

---

Built with React and Tailwind CSS.
