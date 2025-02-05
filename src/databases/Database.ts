//good code
// import SQLite, { SQLiteDatabase, Transaction, SQLError, ResultSet } from 'react-native-sqlite-storage';

// const openDb = async (): Promise<SQLiteDatabase> => {
//   return await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
// };

// export const initDatabase = async () => {
//   const db = await openDb();
//   db.transaction((tx: Transaction) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         username TEXT NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );`,
//       [],
//       () => console.log('Table created successfully'),
//       (error: any) => console.log('Error creating table:', error) // Cast error to any
//     );
//   });
// };

// export const insertUser = async (username: string, email: string, password: string): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `INSERT INTO users (username, email, password) VALUES (?, ?, ?);`,
//         [username, email, password],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error) // Cast error to any
//       );
//     });
//   });
// };

// export default openDb;

//very good code


// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database
// const openDb = async (): Promise<SQLiteDatabase> => {
//   return await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
// };

// // Initialize the database with a new table for locations
// export const initDatabase = async () => {
//   const db = await openDb();
//   db.transaction((tx: Transaction) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS locations (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         city TEXT NOT NULL,
//         pincode TEXT NOT NULL
//       );`,
//       [],
//       () => console.log('Locations table created successfully'),
//       (error: any) => console.log('Error creating locations table:', error)
//     );
//   });
// };

// // Insert location data (city and pincode)
// export const insertLocation = async (city: string, pincode: string): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `INSERT INTO locations (city, pincode) VALUES (?, ?);`,
//         [city, pincode],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error)
//       );
//     });
//   });
// };

// // Function to fetch saved locations
// export const getLocations = async (): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         'SELECT * FROM locations;',
//         [],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error)
//       );
//     });
//   });
// };

// export default openDb;





// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database
// export const openDb = async (): Promise<SQLiteDatabase> => {
//   return await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
// };

// // Initialize the database
// export const initDatabase = async () => {
//   const db = await openDb();
//   db.transaction((tx: Transaction) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         username TEXT NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );`
//     );
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS profiles (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         userId INTEGER NOT NULL,
//         fullName TEXT NOT NULL,
//         mobile TEXT NOT NULL,
//         countryCode TEXT NOT NULL,
//         FOREIGN KEY (userId) REFERENCES users (id)
//       );`
//     );
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS locations (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         userId INTEGER NOT NULL,
//         city TEXT,
//         pincode TEXT,
//         latitude REAL,
//         longitude REAL,
//         FOREIGN KEY (userId) REFERENCES users (id)
//       );`
//     );
//   });
// };

// // Insert profile details
// export const insertUserProfile = async (
//   userId: number,
//   fullName: string,
//   countryCode: string,
//   mobile: string
// ): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `INSERT INTO profiles (userId, fullName, mobile, countryCode) VALUES (?, ?, ?, ?);`,
//         [userId, fullName, mobile, countryCode],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error)
//       );
//     });
//   });
// };

// // Insert location details
// export const insertLocation = async (
//   userId: number,
//   city: string | null,
//   pincode: string | null,
//   latitude: number | null,
//   longitude: number | null
// ): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `INSERT INTO locations (userId, city, pincode, latitude, longitude) VALUES (?, ?, ?, ?, ?);`,
//         [userId, city, pincode, latitude, longitude],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error)
//       );
//     });
//   });
// };


// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database
// export const openDb = async (): Promise<SQLiteDatabase> => {
//   return await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
// };

// // Initialize the database
// export const initDatabase = async () => {
//   const db = await openDb();
//   db.transaction((tx: Transaction) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         username TEXT NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );`
//     );
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS profiles (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         userId INTEGER NOT NULL,
//         fullName TEXT NOT NULL,
//         mobile TEXT NOT NULL,
//         countryCode TEXT NOT NULL,
//         FOREIGN KEY (userId) REFERENCES users (id)
//       );`
//     );
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS locations (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         userId INTEGER NOT NULL,
//         city TEXT,
//         pincode TEXT,
//         latitude REAL,
//         longitude REAL,
//         FOREIGN KEY (userId) REFERENCES users (id)
//       );`
//     );
//   });
// };

// // Get UserId from Full Name
// export const getUserIdFromFullName = async (fullName: string): Promise<number> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `SELECT id FROM profiles WHERE fullName = ?;`,
//         [fullName],
//         (_, result: ResultSet) => {
//           if (result.rows.length > 0) {
//             resolve(result.rows.item(0).id); // Return the userId of the matching fullName
//           } else {
//             reject('User not found');
//           }
//         },
//         (_, error) => reject(error)
//       );
//     });
//   });
// };

// // Insert location details
// export const insertLocation = async (
//   userId: number,
//   city: string | null,
//   pincode: string | null,
//   latitude: number | null,
//   longitude: number | null
// ): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `INSERT INTO locations (userId, city, pincode, latitude, longitude) VALUES (?, ?, ?, ?, ?);`,
//         [userId, city, pincode, latitude, longitude],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error)
//       );
//     });
//   });
// };



// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database
// export const openDb = async (): Promise<SQLiteDatabase> => {
//   try {
//     const db = await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
//     return db;
//   } catch (error) {
//     throw new Error('Failed to open database: ' + error);
//   }
// };

// // Initialize the database
// export const initDatabase = async () => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS users (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           username TEXT NOT NULL,
//           email TEXT NOT NULL UNIQUE,
//           password TEXT NOT NULL
//         );`
//       );
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS profiles (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           userId INTEGER NOT NULL,
//           fullName TEXT NOT NULL,
//           mobile TEXT NOT NULL,
//           countryCode TEXT NOT NULL,
//           FOREIGN KEY (userId) REFERENCES users (id)
//         );`
//       );
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS locations (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           userId INTEGER NOT NULL,
//           city TEXT,
//           pincode TEXT,
//           latitude REAL,
//           longitude REAL,
//           FOREIGN KEY (userId) REFERENCES users (id)
//         );`
//       );
//     });
//   } catch (error) {
//     throw new Error('Failed to initialize database: ' + error);
//   }
// };

// // Get UserId from Full Name
// export const getUserIdFromFullName = async (fullName: string): Promise<number | null> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `SELECT id FROM profiles WHERE fullName = ?;`,
//         [fullName],
//         (_, result: ResultSet) => {
//           if (result.rows.length > 0) {
//             resolve(result.rows.item(0).id); // Return the userId of the matching fullName
//           } else {
//             resolve(null); // User not found, returning null
//           }
//         },
//         (_, error) => {
//           reject('Error fetching user: ' + error.message);
//           return false;
//         }
//       );
//     });
//   });
// };

// // Insert location details
// export const insertLocation = async (
//   userId: number,
//   city: string | null,
//   pincode: string | null,
//   latitude: number | null,
//   longitude: number | null
// ): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       // Validate the input data before inserting
//       if (!userId || !city || !pincode) {
//         reject(new Error('Missing required data: userId, city, or pincode.'));
//         return;
//       }

//       tx.executeSql(
//         `INSERT INTO locations (userId, city, pincode, latitude, longitude) VALUES (?, ?, ?, ?, ?);`,
//         [userId, city, pincode, latitude, longitude],
//         (_, result: ResultSet) => resolve(result),
//         (_, error) => {
//           reject('Error inserting location: ' + error.message);
//           return false;
//         }
//       );
//     });
//   });
// };



// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database
// export const openDb = async (): Promise<SQLiteDatabase> => {
//   try {
//     const db = await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
//     return db;
//   } catch (error) {
//     console.error('Failed to open database: ', error);
//     throw new Error('Failed to open database: ' + error.message);
//   }
// };

// // Initialize the database
// export const initDatabase = async () => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS users (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           username TEXT NOT NULL,
//           email TEXT NOT NULL UNIQUE,
//           password TEXT NOT NULL
//         );`
//       );
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS profiles (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           userId INTEGER NOT NULL,
//           fullName TEXT NOT NULL,
//           mobile TEXT NOT NULL,
//           countryCode TEXT NOT NULL,
//           FOREIGN KEY (userId) REFERENCES users (id)
//         );`
//       );
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS locations (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           userId INTEGER NOT NULL,
//           city TEXT,
//           pincode TEXT,
//           latitude REAL,
//           longitude REAL,
//           FOREIGN KEY (userId) REFERENCES users (id)
//         );`
//       );
//     });
//   } catch (error) {
//     console.error('Failed to initialize database: ', error);
//     throw new Error('Failed to initialize database: ' + error.message);
//   }
// };

// // Get UserId from Full Name
// export const getUserIdFromFullName = async (fullName: string): Promise<number | null> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `SELECT id FROM profiles WHERE fullName = ?;`,
//           [fullName],
//           (_, result: ResultSet) => {
//             if (result.rows.length > 0) {
//               resolve(result.rows.item(0).id); // Return the userId of the matching fullName
//             } else {
//               resolve(null); // User not found, returning null
//             }
//           },
//           (_, error) => {
//             reject('Error fetching user: ' + error.message);
//             return false;
//           }
//         );
//       });
//     });
//   } catch (error) {
//     console.error('Failed to fetch user ID: ', error);
//     throw new Error('Failed to fetch user ID: ' + error.message);
//   }
// };

// // Insert location details
// export const insertLocation = async (
//   userId: number,
//   city: string | null,
//   pincode: string | null,
//   latitude: number | null,
//   longitude: number | null
// ): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       // Validate the input data before inserting
//       if (!userId || !city || !pincode) {
//         reject(new Error('Missing required data: userId, city, or pincode.'));
//         return;
//       }

//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `INSERT INTO locations (userId, city, pincode, latitude, longitude) VALUES (?, ?, ?, ?, ?);`,
//           [userId, city, pincode, latitude, longitude],
//           (_, result: ResultSet) => resolve(result),
//           (_, error) => {
//             reject('Error inserting location: ' + error.message);
//             return false;
//           }
//         );
//       });
//     });
//   } catch (error) {
//     console.error('Failed to insert location: ', error);
//     throw new Error('Failed to insert location: ' + error.message);
//   }
// };



// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database connection
// const openDb = async (): Promise<SQLiteDatabase> => {
//   return await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
// };

// // Initialize the database and create the `locations` table
// export const initDatabase = async () => {
//   const db = await openDb();
//   db.transaction((tx: Transaction) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS locations (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         city TEXT NOT NULL,
//         pincode TEXT NOT NULL
//       );`,
//       [],
//       () => console.log('Locations table created successfully'),
//       (error: any) => console.error('Error creating locations table:', error)
//     );
//   });
// };

// // Insert location data (city and pincode) into the database
// export const insertLocation = async (city: string, pincode: string): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `INSERT INTO locations (city, pincode) VALUES (?, ?);`,
//         [city, pincode],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error)
//       );
//     });
//   });
// };

// // Fetch all locations from the database
// export const getLocations = async (): Promise<ResultSet> => {
//   const db = await openDb();
//   return new Promise((resolve, reject) => {
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `SELECT * FROM locations;`,
//         [],
//         (_: Transaction, result: ResultSet) => resolve(result),
//         (_: Transaction, error: any) => reject(error)
//       );
//     });
//   });
// };

// // Delete all records from the `locations` table (optional utility for cleanup/testing)
// export const clearLocations = async (): Promise<void> => {
//   const db = await openDb();
//   db.transaction((tx: Transaction) => {
//     tx.executeSql(
//       `DELETE FROM locations;`,
//       [],
//       () => console.log('All locations cleared'),
//       (error: any) => console.error('Error clearing locations:', error)
//     );
//   });
// };

// // Close the database (optional utility)
// export const closeDatabase = async (): Promise<void> => {
//   const db = await openDb();
//   db.close(
//     () => console.log('Database closed successfully'),
//     (error: any) => console.error('Error closing database:', error)
//   );
// };

// export default openDb;







// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database connection
// const openDb = async (): Promise<SQLiteDatabase> => {
//   try {
//     const db = await SQLite.openDatabase({
//       name: 'TryTastic.db',
//       location: 'default',
//     });
//     return db;
//   } catch (error) {
//     console.error('Error opening database:', error);
//     throw new Error('Could not open database');
//   }
// };

// // Initialize the database and create the `locations` table
// export const initDatabase = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS locations (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           city TEXT NOT NULL,
//           pincode TEXT NOT NULL
//         );`,
//         [],
//         () => console.log('Locations table created successfully'),
//         (_, error) => console.error('Error creating locations table:', error)
//       );
//     });
//   } catch (error) {
//     console.error('Database initialization error:', error);
//   }
// };

// // Insert location data (city and pincode) into the database
// export const insertLocation = async (city: string, pincode: string): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `INSERT INTO locations (city, pincode) VALUES (?, ?);`,
//           [city, pincode],
//           (_, result) => resolve(result),
//           (_, error) => {
//             console.error('Error inserting location:', error);
//             reject(error);
//           }
//         );
//       });
//     });
//   } catch (error) {
//     console.error('Insert Location Error:', error);
//     throw new Error('Failed to insert location into the database');
//   }
// };

// // Fetch all locations from the database
// export const getLocations = async (): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `SELECT * FROM locations;`,
//           [],
//           (_, result) => resolve(result),
//           (_, error) => {
//             console.error('Error fetching locations:', error);
//             reject(error);
//           }
//         );
//       });
//     });
//   } catch (error) {
//     console.error('Get Locations Error:', error);
//     throw new Error('Failed to fetch locations from the database');
//   }
// };

// // Clear all locations (optional for testing)
// export const clearLocations = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `DELETE FROM locations;`,
//         [],
//         () => console.log('All locations cleared'),
//         (_, error) => console.error('Error clearing locations:', error)
//       );
//     });
//   } catch (error) {
//     console.error('Clear Locations Error:', error);
//   }
// };

// export default openDb;





// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database connection
// const openDb = async (): Promise<SQLiteDatabase> => {
//   try {
//     const db = await SQLite.openDatabase({
//       name: 'TryTastic.db',
//       location: 'default',
//     });
//     return db;
//   } catch (error) {
//     console.error('Error opening database:', error);
//     throw new Error('Could not open database');
//   }
// };

// // Initialize the database and create the `locations` table
// export const initDatabase = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS locations (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           city TEXT NOT NULL,
//           pincode TEXT NOT NULL
//         );`,
//         [],
//         () => console.log('Locations table created successfully'),
//         (_, error) => console.error('Error creating locations table:', error)
//       );
//     });
//   } catch (error) {
//     console.error('Database initialization error:', error);
//   }
// };

// // Insert location data (city and pincode) into the database
// export const insertLocation = async (city: string, pincode: string): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     console.log(`Inserting city: ${city}, pincode: ${pincode}`);
    
//     // Check for empty inputs
//     if (!city || !pincode) {
//       throw new Error('City or Pincode cannot be empty');
//     }

//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `INSERT INTO locations (city, pincode) VALUES (?, ?);`,
//           [city, pincode],
//           (_, result) => resolve(result),
//           (_, error) => {
//             console.error('Error inserting location:', error);
//             reject(error); // Reject the promise with the error
//           }
//         );
//       });
//     });
//   } catch (error) {
//     console.error('Insert Location Error:', error.message || error);
//     throw new Error('Failed to insert location into the database');
//   }
// };

// // Fetch all locations from the database
// export const getLocations = async (): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `SELECT * FROM locations;`,
//           [],
//           (_, result) => resolve(result),
//           (_, error) => {
//             console.error('Error fetching locations:', error);
//             reject(error);
//           }
//         );
//       });
//     });
//   } catch (error) {
//     console.error('Get Locations Error:', error);
//     throw new Error('Failed to fetch locations from the database');
//   }
// };

// // Clear all locations (optional for testing)
// export const clearLocations = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `DELETE FROM locations;`,
//         [],
//         () => console.log('All locations cleared'),
//         (_, error) => console.error('Error clearing locations:', error)
//       );
//     });
//   } catch (error) {
//     console.error('Clear Locations Error:', error);
//   }
// };

// export default openDb;




// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database connection
// const openDb = async (): Promise<SQLiteDatabase> => {
//   try {
//     const db = await SQLite.openDatabase({
//       name: 'TryTastic.db',
//       location: 'default',
//     });
//     return db;
//   } catch (error: unknown) {
//     console.error('Error opening database:', error instanceof Error ? error.message : 'Unknown error');
//     throw new Error('Could not open database');
//   }
// };

// // Initialize the database and create the `locations` table
// export const initDatabase = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS locations (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           city TEXT NOT NULL,
//           pincode TEXT NOT NULL
//         );`,
//         [],
//         () => console.log('Locations table created successfully'),
//         (_, error: unknown) => {
//           console.error('Error creating locations table:', error instanceof Error ? error.message : 'Unknown error');
//         }
//       );
//     });
//   } catch (error: unknown) {
//     console.error('Database initialization error:', error instanceof Error ? error.message : 'Unknown error');
//   }
// };

// // Insert location data (city and pincode) into the database
// export const insertLocation = async (city: string, pincode: string): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     console.log(`Inserting city: ${city}, pincode: ${pincode}`);
    
//     // Check for empty inputs
//     if (!city || !pincode) {
//       throw new Error('City or Pincode cannot be empty');
//     }

//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `INSERT INTO locations (city, pincode) VALUES (?, ?);`,
//           [city, pincode],
//           (_, result) => resolve(result),
//           (_, error: unknown) => {
//             console.error('Error inserting location:', error instanceof Error ? error.message : 'Unknown error');
//             reject(error); // Reject the promise with the error
//           }
//         );
//       });
//     });
//   } catch (error: unknown) {
//     console.error('Insert Location Error:', error instanceof Error ? error.message : 'Unknown error');
//     throw new Error('Failed to insert location into the database');
//   }
// };

// // Fetch all locations from the database
// export const getLocations = async (): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `SELECT * FROM locations;`,
//           [],
//           (_, result) => resolve(result),
//           (_, error: unknown) => {
//             console.error('Error fetching locations:', error instanceof Error ? error.message : 'Unknown error');
//             reject(error);
//           }
//         );
//       });
//     });
//   } catch (error: unknown) {
//     console.error('Get Locations Error:', error instanceof Error ? error.message : 'Unknown error');
//     throw new Error('Failed to fetch locations from the database');
//   }
// };

// // Clear all locations (optional for testing)
// export const clearLocations = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `DELETE FROM locations;`,
//         [],
//         () => console.log('All locations cleared'),
//         (_, error: unknown) => {
//           console.error('Error clearing locations:', error instanceof Error ? error.message : 'Unknown error');
//         }
//       );
//     });
//   } catch (error: unknown) {
//     console.error('Clear Locations Error:', error instanceof Error ? error.message : 'Unknown error');
//   }
// };

// export default openDb;

// import SQLite, { SQLiteDatabase, Transaction, ResultSet } from 'react-native-sqlite-storage';

// // Open the database connection
// const openDb = async (): Promise<SQLiteDatabase> => {
//   try {
//     const db = await SQLite.openDatabase({ name: 'TryTastic.db', location: 'default' });
//     console.log('Database opened successfully');
//     return db;
//   } catch (error: unknown) {
//     console.error('Error opening database:', error instanceof Error ? error.message : 'Unknown error');
//     throw new Error('Could not open database');
//   }
// };

// // Initialize the database and create the `locations` table
// export const initDatabase = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS locations (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           city TEXT NOT NULL,
//           pincode TEXT NOT NULL
//         );`,
//         [],
//         () => console.log('Locations table created successfully'),
//         (_, error: unknown) => {
//           console.error('Error creating locations table:', error instanceof Error ? error.message : 'Unknown error');
//         }
//       );
//     });
//   } catch (error: unknown) {
//     console.error('Database initialization error:', error instanceof Error ? error.message : 'Unknown error');
//   }
// };

// // Insert location data (city and pincode) into the database
// export const insertLocation = async (city: string, pincode: string): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     console.log(`Inserting city: ${city}, pincode: ${pincode}`);
    
//     // Check for empty inputs
//     if (!city || !pincode) {
//       throw new Error('City or Pincode cannot be empty');
//     }

//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `INSERT INTO locations (city, pincode) VALUES (?, ?);`,
//           [city, pincode],
//           (_, result) => {
//             console.log('Location inserted successfully:', result);
//             resolve(result);
//           },
//           (_, error: unknown) => {
//             console.error('Error inserting location:', error instanceof Error ? error.message : 'Unknown error');
//             reject(error);
//           }
//         );
//       });
//     });
//   } catch (error: unknown) {
//     console.error('Insert Location Error:', error instanceof Error ? error.message : 'Unknown error');
//     throw new Error('Failed to insert location into the database');
//   }
// };

// // Fetch all locations from the database
// export const getLocations = async (): Promise<ResultSet> => {
//   try {
//     const db = await openDb();
//     return new Promise((resolve, reject) => {
//       db.transaction((tx: Transaction) => {
//         tx.executeSql(
//           `SELECT * FROM locations;`,
//           [],
//           (_, result) => resolve(result),
//           (_, error: unknown) => {
//             console.error('Error fetching locations:', error instanceof Error ? error.message : 'Unknown error');
//             reject(error);
//           }
//         );
//       });
//     });
//   } catch (error: unknown) {
//     console.error('Get Locations Error:', error instanceof Error ? error.message : 'Unknown error');
//     throw new Error('Failed to fetch locations from the database');
//   }
// };

// // Clear all locations (optional for testing)
// export const clearLocations = async (): Promise<void> => {
//   try {
//     const db = await openDb();
//     db.transaction((tx: Transaction) => {
//       tx.executeSql(
//         `DELETE FROM locations;`,
//         [],
//         () => console.log('All locations cleared'),
//         (_, error: unknown) => {
//           console.error('Error clearing locations:', error instanceof Error ? error.message : 'Unknown error');
//         }
//       );
//     });
//   } catch (error: unknown) {
//     console.error('Clear Locations Error:', error instanceof Error ? error.message : 'Unknown error');
//   }
// };

// export default openDb;




import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

const db = SQLite.openDatabase({ name: "TryTastic.db", location: "default" });

export const initDatabase = async () => {
  try {
    const database = await db;
    await database.executeSql(
      "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, fullName TEXT, email TEXT UNIQUE, password TEXT);"
    );
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

export const insertUser = async (fullName: string, email: string, password: string) => {
  try {
    const database = await db;
    await database.executeSql(
      "INSERT INTO users (fullName, email, password) VALUES (?, ?, ?);",
      [fullName, email, password]
    );
    return true;
  } catch (error) {
    console.error("Error inserting user:", error);
    return false;
  }
};

export const findUser = async (email: string, password: string) => {
  try {
    const database = await db;
    const results = await database.executeSql(
      "SELECT * FROM users WHERE email = ? AND password = ?;",
      [email, password]
    );
    return results[0].rows.length > 0 ? results[0].rows.item(0) : null;
  } catch (error) {
    console.error("Error finding user:", error);
    return null;
  }
};
