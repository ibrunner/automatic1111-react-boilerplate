# My Extension

A minimal proof-of-concept extension that renders a React app in an Automatic1111 WebUI tab.

## Installation

1. Navigate to your WebUI extensions folder:
   cd stable-diffusion-webui/extensions

2. Clone this repository:
   git clone <repo-url> my-extension

3. Install dependencies:
   cd my-extension
   yarn install

4. Build the React app:
   yarn build

5. Start (or restart) the WebUI with the --api flag:
   ./webui.sh --api
   (or on Windows: webui-user.bat --api)

## Development

1. Start the WebUI with:
   ./webui.sh --api

2. In a separate terminal, run:
   cd my-extension
   yarn dev

3. Make changes to the React code in the src/ directory

4. When ready to deploy, build with:
   yarn build

5. Restart the WebUI to load the new build

## Project Structure

my_extension/
├── scripts/
│ └── react_tab.py # Creates tab with root div for React
├── src/
│ ├── App.tsx # Simple React component that says "Hello from React"
│ └── index.tsx # Mounts React into the root div
├── javascript/
│ └── mount.js # Loads built React files when tab opens
├── build/ # Output directory for Vite build
├── package.json # Dependencies: react, react-dom, typescript, vite
├── vite.config.ts # Config to build to build/ directory
└── tsconfig.json # Basic TypeScript config

## How It Works

1. react_tab.py creates a tab with a div#react-root element
2. mount.js sets data-ready="true" on the div when loaded
3. index.tsx waits for data-ready and mounts the React app
4. App.tsx renders "Hello from React" to prove it works
