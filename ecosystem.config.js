module.exports = {
  apps : [
    {
      name: 'client',
      script: './index.js',
      instances: 1,
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '150M',
      env: {
        PORT: 3000
      }
    }
  ]
};