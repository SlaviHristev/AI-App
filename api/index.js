import express from "express";
import cors from "cors";
import ImageKit from "imagekit";
import mongoose from "mongoose";
import Chat from "./models/Chat.js";
import UserChats from "./models/userChats.js";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node'


const port = 3000;

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true
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

app.post('/api/chats', ClerkExpressRequireAuth(), async (req, res) => {
    const userId = req.auth.userId;
    const { text } = req.body;

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
});

app.get('/api/userchats', ClerkExpressRequireAuth(), async (req,res) =>{
    const userId = req.auth.userId;

    try {
        const userChats = await UserChats.find({userId});


        res.status(200).send(userChats[0].chats)
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching chats")
        
    }
})


app.get('/api/chats/:id', ClerkExpressRequireAuth(), async (req,res) =>{
    const userId = req.auth.userId;

    try {
        const chat = await Chat.findOne({_id: req.params.id, userId});


        res.status(200).send(chat)
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching chat")
        
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(401).send('Unauthenticated!')
  })

app.listen(port, () => {
    connect();
    console.log("Server is running..");

})