import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site";

export function FloatingWidgets() {
  return (
    <aside aria-label="Quick contact">
      <a
        className="whatsapp-float"
        href={`${company.whatsapp}?text=Hi%20LetsFygure%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with LetsFygure"
      >
        <MessageCircle size={24} />
      </a>
    </aside>
  );
}