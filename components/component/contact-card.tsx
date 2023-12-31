import React from "react";

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-2 text-gray-600">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default ContactCard;