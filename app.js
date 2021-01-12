const express = require( "express")
const morgan  = require ("morgan");
const cookieParser = require ("cookie-parser")
const cors= require ("cors");
const { json, urlencoded }  = require ("body-parser");

const app = express();

const route = require('./routes/index')

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use('/yahoo', route)

const PORT = process.env.PORT || 3001;

// finally, launch our server on port 3001.
const server = app.listen(PORT, () => {
	console.log("listening on port %s...", server.address().port);
});