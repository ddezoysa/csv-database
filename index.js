let csvdb = require('csv-database');

exports.main = async function () {
    const db = await csvdb("users.csv", ["name", "gender", "address", "position"], ",");
    
    // All Users
    const users = await db.get();
    console.log('All Users: ');
    console.log(JSON.stringify(users, undefined, 2));

    // Get 
    const andiUser = await db.get({name: "Nita"});
    console.log('Get Andi: ');
    console.log(JSON.stringify(andiUser, undefined, 2));

    // Add 
    var dinuthUser = await db.add({name: "Dinuth", gender: "m", address: "London", position: "Architect"});
    console.log('Add Dinuth: ');
    console.log(JSON.stringify(dinuthUser, undefined, 2));

    // Edit 
    // dinuthUser = await db.edit({name: "Dinuth"}, {address: "London UK"});
    // console.log('Edit Dinuth: ');
    // console.log(JSON.stringify(dinuthUser, undefined, 2));

    // Delete 
    // dinuthUser = await db.delete({name: "Dinuth"});
    // console.log('Delete Dinuth: ');
    // console.log(JSON.stringify(dinuthUser, undefined, 2));
}
this.main();
