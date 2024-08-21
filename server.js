/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

// Interactor - Bussiness Login Blueprint
// entities - Holds bussiness data and manpulate to the bussiness requirement
// Persistance - Works with the Database
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import createUserController from "./controller/createUserController.js";
import connectDB from "./config/db.js";
import validateUserController from "./controller/validateUserController.js";
import createChangePasswordTokenController from "./controller/createChangePasswordTokenController.js";
import validateChangePasswordTokenController from "./controller/validateChangePasswordTokenController.js";
import validateServicesController from "./controller/validateServicesController.js";
import smartNotesController from "./controller/smartNotesController.js";
import createClassroomController from "./controller/createClassroomController.js";
import getClassroomController from "./controller/getClassroomController.js";
import createMeetingController from "./controller/createMeetingController.js";
import getClassroomsDataController from "./controller/getClassroomsDataController.js";
import checkIfUserHasClassroomController from "./controller/checkIfUserHasClassroomController.js";
import joinClassroomsController from "./controller/joinClassroomsController.js";
import getStudentClassroomsDataController from "./controller/getStudentClassroomsDataController.js";
import createChatController from "./controller/createChatController.js";
import getChatDataController from "./controller/getChatDataController.js";
import addMessagesController from "./controller/addMessagesController.js";
import getMessagesController from "./controller/getMessagesController.js";
import getNotificationDataController from "./controller/getNotificationDataController.js";

const AUTH_PATH = "/api/auth/";
const VALIDATE_PATH = "/api/validate/";
const NOTES_PATH = "/api/notes/";
const CLASSROOM_PATH = "/api/classroom/";
const CHAT_PATH = "/api/chats/";
// Config for the path of .env file
// dotenv.config({ path: "../server/hidden/.env" });
dotenv.config();
// Adding functionality to the node js
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT ?? 5000;

app.post(`${NOTES_PATH}smartnotes`, smartNotesController);
app.post(`${AUTH_PATH}register`, createUserController);
app.post(`${AUTH_PATH}login`, validateUserController);
app.post(
	`${AUTH_PATH}send-email-to-change-password`,
	createChangePasswordTokenController
);
app.post(`${CLASSROOM_PATH}create-classroom`, createClassroomController);
app.post(`${CLASSROOM_PATH}create-meeting`, createMeetingController);
app.post(`${CLASSROOM_PATH}join-classrooms`, joinClassroomsController);
app.post(`${CHAT_PATH}create-chat`, createChatController);
app.post(`${CHAT_PATH}add-messages`, addMessagesController);
app.post(`${CHAT_PATH}get-messages`, getMessagesController);
app.get(`${VALIDATE_PATH}validate-protected-pages`, validateServicesController);
app.get(`${CLASSROOM_PATH}get-classroom-data`, getClassroomController);
app.get(`${CLASSROOM_PATH}get-classrooms-data`, getClassroomsDataController);
app.get(
	`${CLASSROOM_PATH}check-if-user-has-classrooms`,
	checkIfUserHasClassroomController
);
app.get(
	`${CLASSROOM_PATH}get-student-classrooms-data`,
	getStudentClassroomsDataController
);
app.get(`${CHAT_PATH}get-chats-data`, getChatDataController);
app.get(`${CHAT_PATH}get-notification-data`, getNotificationDataController);
app.put(`${AUTH_PATH}reset-password`, validateChangePasswordTokenController);

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		// origin: "http://localhost:3000", //local instance
		origin: "https://apnividya-beta.vercel.app/", //Vercel instance
		methods: ["GET", "POST"],
		credentials: true,
	},
});
global.onlineUsers = new Map();

io.on("connection", socket => {
	global.chatsocket = socket;
	socket.on("add-user", userId => {
		global.onlineUsers.set(userId, socket.id);
	});

	socket.on("send-msg", data => {
		console.log(data);
		const sendUserSocket = global.onlineUsers.get(data.to);
		if (sendUserSocket) {
			socket.to(sendUserSocket).emit("msg-recieve", data.message);
		}
	});
});

// Starting the server
httpServer.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`The server is running on ${PORT}`);
});
