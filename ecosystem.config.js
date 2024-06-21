module.exports = {
  apps: [
    {
      name: 'admin',
      exec_mode: 'cluster',
      instances: 1,
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '150M',
      env: {
        PORT: 3002
      }
    }
  ]
}