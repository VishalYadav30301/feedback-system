require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceRoute = require('./router/service-router');
const adminRoute = require('./router/admin-router')
const feedbackRoute = require('./router/feedback-router');
const connectDb = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');

const corsOptions = {
    origin: "http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use("/api/feedbackform",feedbackRoute);

app.use("/api/admin", adminRoute);


app.use(errorMiddleware)

connectDb().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
})

