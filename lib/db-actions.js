"use server";
import mongoose from 'mongoose';
import ContactModel from "@/lib/models";

export async function connectDB() {
    await mongoose.connect(process.env.CONNECTDB);
}

export async function saveFeedback(formData) {
    await connectDB();
    const newContact = new ContactModel(formData);
    await newContact.save();
}
