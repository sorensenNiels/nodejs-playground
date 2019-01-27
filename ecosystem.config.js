module.exports = {
  apps: [
    {
      name: "Server",
      script: "server.js",

      output: "./logs/out.log",
      error: "./logs/error.log",
      log: "./logs/combined.outerr.log",
      merge_logs: true,

      args: "one two",
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
