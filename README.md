# LnH Battle

A turn-based battle arena game built with Phaser 3, featuring tactical grid-based combat.

## Prerequisites

- Node.js 20.19.0 or higher
- npm 10.0.0 or higher

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run all tests
- `npm run test:core` - Run unit tests only
- `npm run test:ui` - Run integration tests only
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting errors
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── core/           # Game logic (battle system, AI, etc.)
├── phaser/         # Phaser scenes and UI components
└── assets/         # Game assets (sprites, sounds, etc.)

tests/
├── core/           # Unit tests
├── ui/             # Integration tests
└── ci/             # Test configuration
```

## Development

The game uses ES modules and Vite for fast development. Hot module replacement is enabled for quick iteration.

## Testing

- **Unit Tests**: Jest with jsdom environment
- **Integration Tests**: Playwright for end-to-end testing
- **Coverage**: Minimum 80% coverage required

## Deployment

The game can be deployed to GitHub Pages using:

```bash
npm run deploy
```

Make sure to update the `base` URL in `vite.config.js` to match your repository name.

## License

MIT