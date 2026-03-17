// Database Migration Utility

// This utility is used to run migrations and raw SQL queries on the database.
// It is a sensitive file that requires proper security measure
//testing zaxion in production
javascript
import db from './db';

/**
 * Execute a raw query on the database.
 * @param {string} userId - The ID of the user to etch.
 */
export async function fetchUserData(userId) {
  // VIOLATION 1: SEC-002 
  // This pattern matches the regex in PolicyEngine: /raw\s*\(\s*['"`]SELECT.*?\$\{/i
  const user = await db.raw(`SELECT * FROM users WHERE id = ${userId}`);
  
  // VIOLATION 2: SEC-001 (Hardcoded Secrets)
  // This matches DB connection string pattern: /postgres:\/\/.*:.*@/i
  const backupConn = "postgres://admin:p@ssw0rd123!@localhost:5432/backup_db";
  
  return { user, backupConn };
}

