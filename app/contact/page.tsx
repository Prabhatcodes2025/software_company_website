import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Clickmyze Technologies Pvt Ltd to discuss web, mobile, AI, blockchain, SaaS, or UI/UX product development."
};

export default function ContactPage() {
  return <ContactPageContent />;
}
