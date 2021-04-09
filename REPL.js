const mongoose = require('mongoose');
const db = require('./models')


// db.Product.find()
// .then(products => console.log(products))

// db.Order.create({
//     items: [
//         {
//             product: '606fe9162984dfac11dae9ec',
//             qty: 1
//         },
//         {
//             product: '606fe9162984dfac11dae9ed',
//             qty: 2
//         }
//     ]
// })
//     .then(res => {
//         console.log(res)
//         process.exit();
//     })


// db.Order.find({ orderId: 1 })
// .populate('items.product')
// .then(order => {
//     console.log(JSON.stringify(order, null, '  '));
//     process.exit();
// })

// db.Product.createIndex( { name: "text", description: "text" } );

db.Product.find({ $text: { $search: "cool" } }).then((products) => {
    console.log(JSON.stringify(products, null, "\t"));
    process.exit();
    // res.status(200).json(products);
});
