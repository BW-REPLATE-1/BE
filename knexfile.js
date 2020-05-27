
module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/replate.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  // staging: {
  //   client: 'sqlite3',
  //   connection: {
  //     database: 'my_db',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  // production: {
  //   client: 'sqlite3',
  //   connection: ,
  //     useNullAsDefault: true,
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       directory: './database/migrations',
  //     },
  //     seeds: {
  //       directory: './database/seeds',
  //     },
  //   }
  }