import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Update the database");

  // Connect to db
  const textDb = await openDB("jate", 1);

  // Create db transaction
  const tx = textDb.transaction("jate", "readwrite");

  // Open object store
  const store = tx.objectStore("jate");
  const request = store.put({ id: 1, value: content });

  // Confirmation of the request
  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Connect to db
  const textDb = await openDB("jate", 1);

  // Create db transaction
  const tx = textDb.transaction("jate", "readonly");

  // Open object store
  const store = tx.objectStore("jate");
  const request = store.get(1);

  // Confirmation of the request
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
