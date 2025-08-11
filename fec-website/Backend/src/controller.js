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

        console.log("Message saved:", data);

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
                subject: `Thank You for Reaching Out to Us!`,
                //text: `Your message is sent successfully. This is an automated mail to verify the email.`,
                html: `
                    <p>Hi <strong>${req.body.name}</strong>,</p>

                    <p>Thank you for connecting with us! We’ve received your response and our team is reviewing it. You’ll hear from us shortly if any further action is needed.</p>

                    <p>In the meantime, feel free to explore our 
                    <a href="">website</a>, 
                    <a href="">help center</a>, 
                    or <a href="">blog</a>, 
                    or reach out to us directly at 
                    <a href="">support@yourwebsite.com</a> for urgent matters.</p>

                    <p>We appreciate your time and interest!</p>

                    <p>Warm regards,<br>
                    <strong>Your Company/Team Name</strong><br>
                    <a href="">yourwebsite.com</a> | 
                    <a href="">Instagram</a> | 
                    <a href="">Twitter</a>
                    </p>
                `,

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
    } catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({
            error: "Internal server error",
            details: error.message
        });
    }
}