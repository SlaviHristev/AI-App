import express from "express";
import cors from "cors";
import ImageKit from "imagekit";
import mongoose from "mongoose";
import Chat from "./models/Chat.js";
import UserChats from "./models/userChats.js";



const port = 3000;

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL
    }))

app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");

    } catch (error) {
        console.log(error);

    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
})

app.get('/api/upload', (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.post('/api/chats', async (req, res) => {
    const { userId, text } = req.body;

    try {
        const newChat = new Chat({
            userId: userId,
            history: [{ role: "user", parts: [{ text }] }]
        });
        const savedChat = await newChat.save();

        const UserChats = await UserChats.find({ userId: userId });

        if (!UserChats.length) {
            const newUserChats = new UserChats({
                userId: userId,
                chats: [
                    {
                        _id: savedChat.id,
                        title: text.substring(0, 40),

                    },
                ]
            })

            await newUserChats.save();
        } else {
            await UserChats.updateOne({
                userId: userId
            },
                {

                    $push: {
                        chats: {
                            _id: savedChat
                        }
                    }
                }
            );

            res.status(201).send(newChat._id)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error creating chat!")

    }


})


app.listen(port, () => {
    connect();
    console.log("Server is running..");

})