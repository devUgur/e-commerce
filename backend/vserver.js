const express = require('express');
const vserver = express();
const PORT = 5000;

// Routes
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');
const paymentRoute = require('./routes/payment.route');

vserver.use('/api/user', userRoute);
vserver.use('/api/product', productRoute);
vserver.use('/api/payment', paymentRoute);

vserver.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`)
});