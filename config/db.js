import { set, connect } from "mongoose";

set("strictQuery", true);

const connectDB = async () => {
	try {
		connect(process.env.DB_URL);
		console.log("Database connected");
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;

