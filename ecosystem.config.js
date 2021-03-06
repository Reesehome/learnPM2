module.exports = {
  apps: [{
    name: 'learnPM2',
    script: './app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'Administrator',
      host: ['123.207.65.247'],
      ref: 'origin/master',
      repo: 'git@github.com:Reesehome/learnPM2.git',
      path: '/inetpub/wwwroot/learnPM2',
      'post-deploy': 'git pull && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
