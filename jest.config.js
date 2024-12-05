const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	testEnvironment: "jsdom",
	moduleNameMapper: {
		// Handle module aliases (this matches the aliases in your tsconfig or jsconfig)
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};

module.exports = createJestConfig(customJestConfig);
