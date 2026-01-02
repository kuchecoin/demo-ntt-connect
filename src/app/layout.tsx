'use client';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {/* Background video */}
        <div className="video-wrapper-front">
          <video autoPlay muted loop playsInline>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlay */}
        <div className="video-gradient-overlay" />

        {/* Foreground content */}
        <div className="content-container">
          <div className="logo-container">
            <img src="/assdaq-logo.png" alt="ASSDAQ Logo" />
          </div>

          <div className="page-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
