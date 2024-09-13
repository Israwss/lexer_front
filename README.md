
---

# Lexer C - Frontend (Next.js)

This is the frontend of the Lexer C application, created with Next.js and Tailwind CSS. It allows users to input C code and analyze it using a FastAPI backend.

## Requirements

- Node.js v14 or higher
- npm or yarn

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-repository/lexer-c-frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd lexer-c-frontend
   ```

3. Install the dependencies with npm:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to http://localhost:3000 to view the application.

## Tailwind CSS Configuration

Tailwind CSS is already configured in the project. If you want to customize the styles, you can modify the `tailwind.config.js` file or the `globals.css` file in the `styles` folder.

## Connecting with the Backend

Ensure that the backend (FastAPI) is running at http://127.0.0.1:8000 so the frontend can send requests and receive the C code analysis results.

---


