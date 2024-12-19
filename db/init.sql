-- CREATE DATABASE IF NOT EXISTS socialdb
SELECT 'CREATE DATABASE socialdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'socialdb')\gexec