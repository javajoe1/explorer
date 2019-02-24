const public_api_port = 5500;

const workspace = '.';
const DATE_FORMAT = 'YYYY-MM-DD HH:mm Z';

const DB_HOSTS = process.env.DB_HOSTS || ""
const DB_REPLICA_SET = process.env.DB_REPLICA_SET || ""
const PUBLIC_DB_USER = process.env.PUBLIC_DB_USER || ""
const PUBLIC_DB_PASS = process.env.PUBLIC_DB_PASS || ""
const PUBLIC_DB_NAME = process.env.PUBLIC_DB_NAME || ""

const SHARED_DB = {
  "DB_HOSTS": DB_HOSTS,
  "DB_REPLICA_SET": DB_REPLICA_SET,
  "DB_SSL": true,
  "DB_AUTH_SOURCE": "admin"
};

const PUBLIC_DB = Object.assign({}, SHARED_DB, {
  "PUBLIC_DB_USER": PUBLIC_DB_USER,
  "PUBLIC_DB_PASS": PUBLIC_DB_PASS,
  "PUBLIC_DB_NAME": PUBLIC_DB_NAME,
});

module.exports = {
  apps: [
    {
      "name": "public-api",
      "script": "server.js",
      "cwd": workspace + "server",
      "log_date_format" : DATE_FORMAT,
      "env": Object.assign({}, {
        "NODE_ENV": "development",
        "PORT": public_api_port,
        "DB_HOSTS": "localhost:27017",
        "PUBLIC_DB_USER": "",
        "PUBLIC_DB_PASS": "",
        "PUBLIC_DB_NAME": "phylex-public",
        "DB_REPLICA_SET": "",
        "DB_SSL": false,
        "DB_AUTH_SOURCE": "",
      }),
      'env_production': Object.assign({}, PUBLIC_DB, {
        "NODE_ENV": "production",
        "PORT": public_api_port
      })
    }
  ]
};