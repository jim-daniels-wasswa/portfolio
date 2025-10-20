import "../styles/globals.css";
export const metadata = {
    title: "Jim Daniels Wasswa | Front-End Developer Portfolio",
    description:
        "Personal portfolio showcasing projects, skills, and experience in React, .js, and full-stack development.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
