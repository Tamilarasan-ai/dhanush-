// pages/_app.js

import { useEffect } from 'react';
import '../styles/globals.css'; // Import your global CSS if needed

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add the Chatbot configuration script
    window.embeddedChatbotConfig = {
      chatbotId: "aVLpAXmQ-w9oxfwDlWE0g",
      domain: "www.chatbase.co",
    };

    // Create a script element to load the Chatbase embed script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', "aVLpAXmQ-w9oxfwDlWE0g");
    script.setAttribute('domain', "www.chatbase.co");
    document.body.appendChild(script);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
