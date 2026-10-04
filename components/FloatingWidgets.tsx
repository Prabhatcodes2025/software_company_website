import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site";

export function FloatingWidgets() {
  return <a className="whatsapp-float" href={`${company.whatsapp}?text=Hi%20LetsFygure%2C%20I%27d%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer" aria-label="Chat with LetsFygure on WhatsApp"><MessageCircle size={22} /><span>Chat on WhatsApp</span></a>;
}
