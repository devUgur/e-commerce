const express = require('express');
const vserver = express();
const PORT = 5000;

vserver.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`)
})