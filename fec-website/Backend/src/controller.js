import Msg from "./model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const submit = async (req, res) => {
    try {
        // Input validation
        if (!req.body.name || !req.body.email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        // Save to DB
        const data = new Msg(req.body);
        await data.save();

        // Send email
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.GMAIL_ID,
                    pass: process.env.GMAIL_PASSWORD,
                },
            });

            const info = await transporter.sendMail({
                from: process.env.GMAIL_ID,
                to: req.body.email,
                subject: `Hello ${req.body.name}`,
                text: `Your message is sent successfully. This is an automated mail to verify the email.`,
            });

            console.log("Message sent: %s", info.messageId);
            return res.status(200).json({ 
                success: true,
                message: "Message saved and email sent successfully",
                messageId: info.messageId
            });
        } catch (emailError) {
            console.error("Email failed:", emailError);
            return res.status(200).json({
                success: true,
                message: "Message saved but email failed to send",
                warning: "Email delivery failed"
            });
        }
    } catch(error) {
        console.error("Server error:", error);
        return res.status(500).json({ 
            error: "Internal server error",
            details: error.message 
        });
    }
}