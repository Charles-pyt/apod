# APOD Command Center

A minimalist, aerospace-themed New Tab dashboard built for the **Hack Club Stardance YSWS**.

Instead of a generic new tab page, this project transforms your browser's entry point into a brutalist, low-level system command center. It combines daily space exploration with practical everyday utilities.

## Key Features

This project was built from scratch without templates, fulfilling the Stardance requirements with the following features:

- **NASA API Integration**: Automatically fetches and displays the Astronomy Picture of the Day (image or video) along with its scientific explanation directly from NASA's database.
- **Live System Clock**: A real-time digital clock embedded in the top dashboard to keep track of time during missions.
- **Terminal Search Bar**: An integrated quick-search input routed to DuckDuckGo, styled like a command-line prompt (`> SEARCH SYSTEM...`).
- **Temporal Navigation**: A custom-styled date picker allowing users to travel back in time and retrieve APOD data from any previous date.
- **Brutalist UI/UX**: A custom CSS design featuring a pure black background, monospace typography, sharp edges, and a distinctive orange accent color inspired by aerospace telemetry interfaces.
- **Sponsor Footer**: A dedicated section acknowledging the Stardance sponsors (Hack Club, NASA, and AMD) with interactive hover effects.

## Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: 100% custom CSS (Flexbox, CSS Variables, animations, and responsive design).
- **Vanilla JavaScript**: DOM manipulation, asynchronous API requests with `async`/`await`, and real-time clock logic.
- **Vite**: Frontend tooling and environment variable management.

## How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Charles-pyt/apod.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd apod
   ```

3. **Create a `.env` file** in the project root and add your NASA API key:

   ```bash
   VITE_NASA_API_KEY=your_api_key_here
   ```

4. **Install dependencies and start the development server:**

   ```bash
   npm install
   npm run dev
   ```
