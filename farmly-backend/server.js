    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const http = require("http");
    const { Server } = require("socket.io");
    require("dotenv").config();

    const connectDB = require("./config/db");
    const { sendMessage } = require("./controllers/messageController"); // Adjust path as needed

    const app = express();
    const server = http.createServer(app);

    const testRoutes = require("./routes/testRoutes");
    app.use("/api/test", testRoutes);


    // Real-time setup
    const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
    });

    // Middlewares
    app.use(cors());
    app.use(express.json());

    // Connect to DB
    connectDB();

    // Example route
    app.get("/", (req, res) => res.send("Farmly API Running"));

    // Socket.io setup
    io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);

    // Real-time message listener
    socket.on("sendMessage", async ({ senderId, recipientId, content }) => {
        try {
        await sendMessage(senderId, recipientId, content, io);
        } catch (error) {
        console.error("Error sending message:", error.message);
        socket.emit("messageError", { error: error.message });
        }
    });

    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);
    });
    });

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
