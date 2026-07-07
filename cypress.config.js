const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
const logToOutput = require("cypress-log-to-output").install;
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    // Base URL configurável
    baseUrl:
      process.env.BASE_URL || "https://www.automationexercise.com/",

    env: {
      // API configurável
      apiUrl:
        process.env.API_URL ||
        "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",

      // Tags do Cucumber
      tags: process.env.TAGS || ""
    },

    // Timeouts parametrizáveis
    defaultCommandTimeout: Number(process.env.DEFAULT_COMMAND_TIMEOUT) || 10000,
    requestTimeout: Number(process.env.REQUEST_TIMEOUT) || 10000,
    responseTimeout: Number(process.env.RESPONSE_TIMEOUT) || 30000,
    pageLoadTimeout: Number(process.env.PAGE_LOAD_TIMEOUT) || 60000,

    // Retries (útil para CI)
    retries: {
      runMode: Number(process.env.RUN_RETRIES) || 2,
      openMode: Number(process.env.OPEN_RETRIES) || 0
    },

    viewportWidth: Number(process.env.VIEWPORT_WIDTH) || 1280,
    viewportHeight: Number(process.env.VIEWPORT_HEIGHT) || 720,

    specPattern: "cypress/e2e/**/*.feature",

    setupNodeEvents(on, config) {
      const logDir = path.join(__dirname, "cypress/logs");

      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
        console.log("Diretório 'cypress/logs' criado com sucesso.");
      }

      on("file:preprocessor", cucumber());

      mochawesome(on);

      logToOutput(on);

      installLogsPrinter(on, {
        printLogsToFile: "always",
        outputRoot: "cypress/logs",
        printLogsToConsole: "always",
      });

      return config;
    },

    reporter: "cypress-mochawesome-reporter",

    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
  },
});