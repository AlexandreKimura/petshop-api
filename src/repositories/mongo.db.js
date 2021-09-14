import mongoose from "mongoose";

async function connect() {
  const uri = process.env.MONGODB_URL;
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
