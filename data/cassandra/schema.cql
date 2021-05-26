CREATE KEYSPACE IF NOT EXISTS candy_keyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}  AND durable_writes = true;

CREATE TABLE IF NOT EXISTS candy_keyspace.candy (
  name ascii,
  chocolate boolean,
  caramel boolean,
  sugarpercent double,
  winpercent double,
  PRIMARY KEY (name)
);
