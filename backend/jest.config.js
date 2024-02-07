module.exports = {
    verbose: true,
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'node'],
    roots: ['./src'],
    transformIgnorePatterns: ['/node_modules/'],
    moduleDirectories: ['node_modules'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{js}', '!**/node_modules/**'],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80,
        },
    },
};
