# Event Horizon - Premium Event Management

A high-end, immersive event management application built with a focus on luxury aesthetics and refined user experience.

## 🌟 Premium Aesthetic
The project features a **Gold & White** premium theme:
- **Primary Color**: Vibrant Gold (`#D4AF37`) for accents and highlights.
- **Typography**: Elegant Serif fonts for headings and minimalist Sans-Serif for body text.
- **Immersive Design**: Full-background "live" images with interactive hover effects.

## 🛠 Tech Stack
- **Frontend**: 
  - **React** (Vite)
  - **Tailwind CSS** (Styling)
  - **Framer Motion** (Animations)
  - **Lucide React** (Icons)
  - **Wouter** (Routing)
- **Backend**:
  - **Node.js** with **Express**
  - **TypeScript** (Execution via `tsx`)
- **Database**:
  - **PostgreSQL**
  - **Drizzle ORM** (Schema & Migrations)

## 🚀 How to Run the Project

### 1. Prerequisites
- Node.js (v20 or higher)
- PostgreSQL database

### 2. Setup
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Environment Variables**:
    Create a `.env` file in the root directory and add your PostgreSQL connection string:
    ```env
    DATABASE_URL=postgresql://username:password@localhost:5434/event_horizon
    ```
3.  **Database Migration**:
    Push the schema to your local database:
    ```bash
    npm run db:push
    ```

### 3. Run Locally
Start the development server:
```bash
npm run dev
```
The application will be accessible at: **[http://localhost:5000](http://localhost:5000)**

## 📜 Work Accomplished
Our team has refined the project with the following enhancements:
- **Aesthetic Unification**: Applied the Gold/White theme across all pages (`Home`, `About`, `Services`, `Gallery`, `Reviews`, `Contact`).
- **Home Page Makeover**: 
    - Transformed the services overview into immersive 700px tall cards.
    - Added high-quality "live" background images with zoom-on-hover effects.
    - Implemented large, minimalist all-caps typography.
- **Gallery Refinement**: Added decorative dual-layer gold borders to all portfolio images.
- **Services Layout**: Optimized the "Catalogue" section into a compact 2x2 grid for better visibility.
- **Windows Optimization**: Updated project scripts for seamless execution on Windows systems.

## 📁 Project Structure
- `client/src/pages`: Component-based page layouts.
- `client/src/assets`: Image assets and visual resources.
- `server/`: Express server and database configuration.
- `shared/`: Database schema and shared TypeScript interfaces.
- `attached_assets/`: Direct assets used in the application.

---
*Created with distinction by the Grey Giant team.*
