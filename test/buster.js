var config = module.exports;

config["My tests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    sources: [
        "*.js"   // Glob patterns supported
    ],
    tests: [
        "test/*-test.js"
    ]
};