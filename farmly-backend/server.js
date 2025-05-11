const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const { sendMessage } = require("./controllers/messageController");
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const server = http.createServer(app);

// ✅ Middlewares FIRST
app.use(cors({
  origin: "http://localhost:5173", // Frontend origin
  credentials: true,
}));
app.use(express.json());

// ✅ THEN your routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes); // Admin routes);


// DB Connection
connectDB();

// Basic test route
app.get("/", (req, res) => res.send("Farmly API Running"));

// ✅ Socket.io CORS config
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Socket.io logic
io.on("connection", (socket) => {
  //console.log("A user connected: " + socket.id);

  socket.on("sendMessage", async ({ senderId, recipientId, content }) => {
    try {
      await sendMessage(senderId, recipientId, content, io);
    } catch (error) {
      console.error("Error sending message:", error.message);
      socket.emit("messageError", { error: error.message });
    }
  });

  socket.on("disconnect", () => {
    //console.log("User disconnected: " + socket.id);
  });
});

// Server start
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
