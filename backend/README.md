# TypeScript Express.js Backend

A modern, production-ready TypeScript Express.js backend with automatic server reloading.

## Features

- ✅ TypeScript support with strict type checking
- ✅ Express.js web framework
- ✅ Automatic server reloading with Nodemon
- ✅ Security middleware (Helmet)
- ✅ CORS support
- ✅ Request logging (Morgan)
- ✅ Environment variables support
- ✅ Error handling middleware
- ✅ Health check endpoint
- ✅ Production-ready build process

## Project Structure

```
backend/
├── src/
│   └── index.ts          # Main server file
├── dist/                 # Compiled JavaScript (generated)
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── nodemon.json         # Nodemon configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:
   - Copy `.env` file and update values as needed
   - Default port is 3000

### Development

Start the development server with automatic reloading:

```bash
npm run dev
```

The server will start on `http://localhost:3000` and automatically restart when you make changes to the code.

### Production

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run clean` - Clean the dist directory

## API Endpoints

- `GET /` - Welcome message with server info
- `GET /health` - Health check endpoint
- `GET /api` - API status endpoint

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Express.js** - Web framework
- **Nodemon** - Development server with auto-reload
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variables loader

## Development Workflow

1. Make changes to files in the `src/` directory
2. The server automatically restarts thanks to Nodemon
3. Test your changes at `http://localhost:3000`
4. Build for production with `npm run build`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License
