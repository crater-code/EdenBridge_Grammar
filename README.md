# Edenbridge Grammar School — Web Platform ("Beyond Schooling")

[![React Version](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7.13.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r159-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3.4.19-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PHP Backend](https://img.shields.io/badge/Backend-PHP_8.x_MySQL-777BB4?logo=php&logoColor=white)](https://www.php.net/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

Official web platform for **Edenbridge Grammar School**, an institution in Islamabad and Rawalpindi, Pakistan offering a values-anchored, academically rigorous curriculum with the **Exel Integrated Learning Framework**, blending Islamic values with AI-enhanced personalized learning.

---

## 📑 Table of Contents

- [Overview & Architecture](#overview--architecture)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Directory Structure](#project-directory-structure)
- [Routing & Page Map](#routing--page-map)
- [Backend & Database Setup](#backend--database-setup)
- [Local Development Setup](#local-development-setup)
- [Deployment Guidelines](#deployment-guidelines)
- [Audit Findings & Recommendations](#audit-findings--recommendations)
- [Contact & Support](#contact--support)

---

## 🌟 Overview & Architecture

The application is structured as a modern decoupled web platform:
1. **Frontend**: A high-performance Single-Page Application (SPA) built with **React 18**, leveraging **Framer Motion** for micro-interactions, **Three.js** / **React Three Fiber** for 3D orbital visualizations of school values and neural models, and **TailwindCSS** with custom responsive styling for displays ranging from mobile devices up to 4K LED screens.
2. **Backend**: Lightweight, secure **PHP REST API** endpoints with **MySQL** database persistence, handling student admissions, contact requests, client IP rate-limiting, and automated email notifications.
3. **Institutional Documents**: 8 official school policy documents in PDF format, accessible via interactive flip cards and modal readers.

---

## 🚀 Key Features

- **3D Interactive Core Values**: Dynamic planetary orbit rendering with Three.js (`CoreValues3D.jsx`), featuring interactive hover states, metallic shaders, and real-time animation.
- **Exel Integrated Curriculum Explorer**: Detailed phase-by-phase curriculum breakdowns:
  - *Foundation Phase* (Early Years)
  - *Formation Phase* (Primary Years)
  - *Orientation Phase* (Middle School)
  - *Direction Phase* (High School & O-Levels)
- **AI & Neuro-Educational Models**: Dynamic visual representations of AI learning frameworks (`AIModelsVisualization.jsx` and `NeuralDiagram.js`).
- **Online Admission Application**: Validated form with asynchronous submission to the backend API (`/api/submit-application.php`), client-side feedback, and rate-limit safeguards.
- **Dynamic Policy Library**: Instant access to 8 school policy PDFs (Safeguarding, Data Protection, Code of Conduct, Assessment, Teaching & Learning, AI/Digital Safety guides for parents and students).
- **Responsive Display Optimization**: Custom CSS media queries supporting ultra-wide landscape viewports (21:9, 32:9) and high-density 4K LED conference displays (`led-display-fix.css`).
- **SEO & Social Optimization**: Dynamic page metadata using `react-helmet-async`, canonical URLs, JSON-LD structured data, and Google Analytics integration.

---

## 🛠️ Technology Stack

### Frontend
| Component | Technology | Version | Purpose |
|---|---|---|---|
| Core Framework | React | `^18.2.0` | UI component tree and state management |
| Routing | React Router DOM | `^7.13.0` | Client-side declarative routing |
| 3D Graphics | Three.js | `^0.159.0` | WebGL 3D scene rendering |
| R3F Integration | `@react-three/fiber` | `^8.15.0` | React renderer for Three.js |
| 3D Helpers | `@react-three/drei` | `^9.92.0` | OrbitControls, Torus, Spheres, and HTML overlays |
| Animations | Framer Motion | `^10.16.0` | Scroll-triggered transitions and modals |
| Styling Engine | TailwindCSS | `^3.4.19` | Utility-first CSS classes |
| PostCSS / Build | `@craco/craco` | `^5.9.0` | Custom webpack and PostCSS configuration |
| SEO / Meta | `react-helmet-async` | `^2.0.5` | Document `<head>` tags per route |

### Backend & Storage
| Component | Technology | Purpose |
|---|---|---|
| Language | PHP 8.x | Lightweight REST endpoints |
| Database | MySQL / MariaDB (InnoDB) | Relational storage for applications, contacts, and logs |
| Server Environment | Apache with `mod_rewrite` & `.htaccess` | CORS headers, rewrite rules, and security headers |
| Security | Parameterized SQL (`mysqli`), HTML sanitization, IP rate limiter | Injection and spam prevention |

---

## 📁 Project Directory Structure

```text
EdenBridge_Grammar/
├── api/                                # Backend PHP endpoints
│   ├── .htaccess                       # Apache routing & CORS headers
│   ├── config.php                      # Database credentials & email settings
│   ├── submit-application.php          # Admission application form handler
│   └── submit-contact.php              # General inquiries handler
├── database-setup.sql                  # MySQL schema definition & admin seed
├── public/                             # Static public assets
│   ├── policies/                       # Official school policy PDFs (8 files)
│   ├── hero-video.mp4                  # Main homepage looping video
│   ├── logo.png                        # School crest & identity
│   ├── favicon.ico                     # Browser icon
│   ├── index.html                      # HTML entrypoint & GA tag
│   ├── robots.txt                      # Search engine crawler rules
│   └── sitemap.xml                     # XML site indexing
├── src/                                # Application source code
│   ├── assets/                         # Static icons and imagery
│   ├── components/                     # Reusable React components
│   │   ├── AIModelsVisualization.jsx   # Interactive AI models chart
│   │   ├── CoreValues3D.jsx            # 3D planet orbit visualization (R3F)
│   │   ├── CoreValues3D.css            # 3D canvas styling
│   │   ├── DiscoverModal.js            # Video/curriculum discover modal
│   │   ├── Footer.js / Footer.css      # Site footer with map & social links
│   │   ├── Navbar.js / Navbar.css      # Sticky navigation & mobile hamburger
│   │   ├── NeuralDiagram.js            # Visual cognitive network
│   │   ├── PageTitle.js                # Dynamic document title hook
│   │   ├── ParticleBackground.js       # Subtle particle canvas
│   │   ├── Scene3D.js                  # Hero WebGL scene
│   │   ├── ScrollToTop.js              # Route change window scroll reset
│   │   └── SEO.js                      # Reusable SEO meta tags component
│   ├── pages/                          # Routed view components
│   │   ├── ApplyNow.js                 # Admissions application form
│   │   ├── BoardOfDirectors.js         # Leadership and governance
│   │   ├── Careers.js                  # Job vacancies and submissions
│   │   ├── Direction.js                # Direction Phase (High School / O-Levels)
│   │   ├── FAQ.js                      # Flip-card FAQ interactive accordion
│   │   ├── Formation.js                # Formation Phase (Primary School)
│   │   ├── Foundation.js               # Foundation Phase (Early Years)
│   │   ├── FoundersMessage.js          # Founder's vision message
│   │   ├── IdeologyPageCSS.js          # School philosophy & values
│   │   ├── LearningFramework.js        # Exel Integrated Curriculum framework
│   │   ├── Orientation.js              # Orientation Phase (Middle School)
│   │   ├── Policies.js                 # Interactive policy PDF library
│   │   └── Study.js                    # Academic programs overview
│   ├── App.js / App.css                # Homepage master layout
│   ├── index.js / index.css            # React root mount & global styles
│   └── led-display-fix.css             # Large display (4K/LED) responsive overrides
├── craco.config.js                     # CRACO PostCSS / Tailwind bridge
├── tailwind.config.js                  # Tailwind design tokens & breakpoints
├── vercel.json                         # Vercel SPA routing redirects
└── package.json                        # NPM project dependencies & scripts
```

---

## 🗺️ Routing & Page Map

| Route | Page Component | Description |
|---|---|---|
| `/` | `App.js` | Main landing page, hero video, 3D Core Values, admissions overview |
| `/our-ideology` | `IdeologyPageCSS.js` | School ideology, educational philosophy, Islamic values integration |
| `/study` | `Study.js` | Comprehensive overview of the Exel Integrated Curriculum |
| `/study/foundation-phase` | `Foundation.js` | Foundation Stage: early childhood development and sensory learning |
| `/study/formation-phase` | `Formation.js` | Formation Stage: fundamental literacy, numeracy, and character building |
| `/study/orientation-phase` | `Orientation.js` | Orientation Stage: exploratory thinking and academic readiness |
| `/study/direction-phase` | `Direction.js` | Direction Stage: specialization, Cambridge O-Levels, and leadership |
| `/study/learning-framework`| `LearningFramework.js` | Neuro-pedagogy, AI integration, and personalized education models |
| `/team/board-of-directors` | `BoardOfDirectors.js` | Profiles of school governors, trustees, and academic advisors |
| `/team/founders-message` | `FoundersMessage.js` | Letter from the school leadership and visionary statement |
| `/team/careers` | `Careers.js` | Academic and administrative career openings |
| `/apply-now` | `ApplyNow.js` | Admissions application form with backend integration |
| `/faq` | `FAQ.js` | Interactive flip card FAQ accordion with categorized guidance |
| `/policies` | `Policies.js` | Official school policies library with direct PDF viewing |

---

## 💾 Backend & Database Setup

The backend handles admission applications and form submissions using a MySQL database.

### 1. Database Schema
Execute the queries in [`database-setup.sql`](file:///C:/Users/abdul/.gemini/antigravity-ide/scratch/EdenBridge_Grammar/database-setup.sql) via phpMyAdmin or the MySQL CLI. It creates:
- `applications`: Stores parent name, email, phone, child age bracket, message, submission IP, user agent, and status flags (`pending`, `reviewed`, `contacted`, `enrolled`, `rejected`).
- `contact_messages`: Handles general questions and contact form data.
- `rate_limiting`: Enforces a maximum of 5 submissions per IP within a 24-hour window.
- `admin_users`: Manages administrative credentials (includes default admin seed).
- `activity_log`: Tracks administrative changes and audit events.

### 2. API Configuration
Edit [`api/config.php`](file:///C:/Users/abdul/.gemini/antigravity-ide/scratch/EdenBridge_Grammar/api/config.php) to update production database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_database_user');
define('DB_PASS', 'your_database_password');
define('DB_NAME', 'your_database_name');

define('ADMIN_EMAIL', 'info@edenbridgegrammar.com');
define('SITE_URL', 'https://edenbridgegrammar.edu');
```

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: v18.x or v20.x
- **NPM**: v9.x or v10.x
- *(Optional for Backend)*: Local Apache/PHP 8.x stack (e.g., XAMPP, Laragon, or Docker)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/crater-code/EdenBridge_Grammar.git
   cd EdenBridge_Grammar
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   *If port 3000 is occupied by another process, specify an alternate port:*
   ```powershell
   # PowerShell (Windows)
   $env:PORT="3001"; npm start

   # Bash (macOS / Linux)
   PORT=3001 npm start
   ```

4. **Access the application:**
   - Open your browser to `http://localhost:3000` (or `http://localhost:3001`).

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deployment Guidelines

### Option A: Vercel (Frontend Only)
The repository contains [`vercel.json`](file:///C:/Users/abdul/.gemini/antigravity-ide/scratch/EdenBridge_Grammar/vercel.json) configured for single-page application routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
*Note: Because Vercel does not natively run PHP scripts out-of-the-box, the `/api/` endpoints must either be hosted on a PHP-capable host (such as Hostinger or cPanel) with CORS enabled, or rewritten to Vercel Serverless Functions.*

### Option B: Hostinger / cPanel / Apache LAMP (Full Stack)
1. Run `npm run build` locally.
2. Upload the contents of the generated `build/` folder to your server's `public_html/`.
3. Copy the `api/` directory into `public_html/api/`.
4. Ensure `.htaccess` is present in `public_html/` with the standard SPA rewrite rules:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
5. Import `database-setup.sql` into phpMyAdmin and update `api/config.php`.

---

## 🔍 Audit Findings & Recommendations

A comprehensive code and architectural audit of the repository reveals the following findings:

### 1. Build & Dependency Setup
- **CRACO Version Compatibility**: The project uses `@craco/craco: ^5.9.0` with `react-scripts: ^5.0.1`. In newer Node/NPM environments, CRACO 5 produces a warning regarding missing `eslint-loader`.
  - *Recommendation*: Upgrade to `@craco/craco: ^7.1.0` or consider migrating to **Vite** for sub-second build times and streamlined Tailwind configuration.

### 2. Asset Optimization
- **Large Image Assets in Source**:
  - `src/components/Orientation.png` is **6.48 MB**.
  - `src/components/direction.png` is **903 KB**.
  - *Recommendation*: Convert these high-resolution images to modern `.webp` format and compress them (reducing total size from 7.4 MB to under 400 KB), drastically improving page load speed.
- **Hero Video**:
  - `public/hero-video.mp4` is **3.4 MB**. While streaming smoothly, adding a static video poster image prevents a blank flash on slower mobile connections.

### 3. Policy PDF Management
- The 8 PDF files in `public/policies/` are properly linked in `src/pages/Policies.js`.
- Note: Several filenames contain trailing spaces (e.g., `Data Protection Policy .pdf`, `Code of Conduct .pdf`).
  - *Recommendation*: Standardize file naming conventions to kebab-case (e.g., `data-protection-policy.pdf`) and update links accordingly to prevent URL-encoding anomalies across web servers.

### 4. API & Form Integration
- `src/pages/ApplyNow.js` makes a `fetch('/api/submit-application.php')` call.
- When deployed on static hosting without a PHP runtime, form submissions fail gracefully with a user alert.
  - *Recommendation*: Set up an environment variable `REACT_APP_API_BASE_URL` so that API calls can target a remote backend domain when the frontend is hosted independently on Vercel.

### 5. Security & Administration
- In `database-setup.sql`, a default administrator account is seeded with a placeholder password (`ChangeMe123!`).
  - *Action*: Change this initial password immediately upon deploying to a live MySQL instance.
- The PHP endpoints correctly utilize prepared statements with parameter binding, defending against SQL injection vulnerabilities.

---

## 📞 Contact & Support

- **Institution**: Edenbridge Grammar School
- **Website**: [https://edenbridgegrammar.edu](https://edenbridgegrammar.edu)
- **Email**: [info@edenbridgegrammar.com](mailto:info@edenbridgegrammar.com)
- **WhatsApp / Phone**: [+92 333 6274343](https://wa.me/923336274343)
- **Locations**: Islamabad & Rawalpindi, Pakistan

---

## 📄 License

Proprietary — All rights reserved by **Edenbridge Grammar School**.