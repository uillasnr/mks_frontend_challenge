const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
});

// Add any custom Jest configuration options
const customJestConfig = {
  // Enable code coverage with the v8 provider (optional)
  coverageProvider: 'v8',

  // Configure a testing environment based on your needs
  // (choose from "jsdom", "node", "browser", or custom)
  testEnvironment: 'jsdom',

  // Add custom setup files (e.g., for environment variables or polyfills)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Replace with your setup file path

  // Use the ts-jest preset for TypeScript support (if applicable)
  preset: 'ts-jest',

  // Add any other Jest configuration options as needed
};

// Export the final Jest configuration, ensuring Next.js config is loaded asynchronously
module.exports = createJestConfig(customJestConfig);
