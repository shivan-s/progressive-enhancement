import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec(`
	CREATE TABLE list(
		id INTEGER PRIMARY KEY,
		value TEXT
	)
`);
