import { NextApiRequest, NextApiResponse } from "next";

export default function savePost (req:NextApiRequest, res: NextApiResponse) {
    const {postContent} = req.body;
    console.log(postContent)

    return res.status(200).json({ message: "Post salvo com sucesso!" });
}