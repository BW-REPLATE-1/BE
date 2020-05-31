require('dotenv').config();
const server = require ('./api/server');

const PORT = process.env.PORT;

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "There was an error performing the required operation"
    });
});

if (!module.parent) {
	server.listen(PORT, () => {
		console.log(`Running at http://localhost:${PORT}`)
    })
};
