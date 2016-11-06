
module.exports = {
    "port": 3000,
    "files": ["./src/**/*.{html,htm,css,js}"],
    "server": {
        "baseDir": "./src/public",
        "routes": {
            "/node_modules": "node_modules",
            "/app": "./src/app",
            "/css": "./src/css",
        }
    }
};
