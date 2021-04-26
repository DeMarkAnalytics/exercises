CREATE KEYSPACE IF NOT EXISTS candy_keyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}  AND durable_writes = true;

CREATE TABLE IF NOT EXISTS candy_keyspace.candy (
  competitorname ascii,
  chocolate boolean,
  fruity boolean,
  caramel boolean,
  peanutyalmondy boolean,
  nougat boolean,
  crispedricewafer boolean,
  hard boolean,
  bar boolean,
  pluribus boolean,
  sugarpercent double,
  pricepercent double,
  winpercent double,
  PRIMARY KEY (competitorname)
);
