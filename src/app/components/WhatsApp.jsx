import { MessageCircle } from "lucide-react";
import "./WhatsApp.css";

export default function WhatsApp({ wa }) {
  return (
    <a
      className="wa"
      href={wa}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}
