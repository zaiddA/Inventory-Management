// This file is used to configure the pm2 process manager
module.exports = {
  apps: [
    {
      name: "Inventory-Management",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        ENV_VAR1: "environment-variable",
      },
    },
  ],
};
