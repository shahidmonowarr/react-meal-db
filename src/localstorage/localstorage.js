

const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else { db[item] = 1; }
    saveToDb(db);
}

const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db);
}
//save to localstore.
const saveToDb = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJSON);
}

const getDb = () => {
    let savedDb = localStorage.getItem('shopping-cart');
    if (savedDb) {
        savedDb = JSON.parse(savedDb);
    }
    else {
        savedDb = {};
    }

    return savedDb;

    // shorcut way 
    //return savedDb ? JSON.parse(savedDb):{};
}

export { addToDb, removeFromDb, getDb };