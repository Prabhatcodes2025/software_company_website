export type CaseEditorial = {
  opening: string;
  storyTitle: string;
  storyText: string;
  mediaTitle: string;
  mediaText: string;
  desktopNote: string;
  mobileNote: string;
  outcomeIntro: string;
  cta: string;
};

export const caseEditorial: Record<string, CaseEditorial> = {
  "ongole-property": {
    opening: "Property discovery is only one part of a marketplace. Owners and operators also need clear control over listings and enquiries.",
    storyTitle: "One marketplace, several responsibilities",
    storyText: "The public experience helps people find property. Behind that journey, the delivered scope includes owner and operator workspaces, listing approvals and managed enquiries. The interface has to make each role's next action clear.",
    mediaTitle: "Discovery first. Operations behind it.",
    mediaText: "The public desktop and mobile captures show the customer-facing property journey. Role-aware workflows are described from the owner-supplied scope; private workspaces are not shown without approved assets.",
    desktopNote: "Public property discovery interface on desktop",
    mobileNote: "Public property discovery interface on mobile",
    outcomeIntro: "The delivered platform connects customer discovery with listing and enquiry work.",
    cta: "Discuss a role-aware platform",
  },
  naystrip: {
    opening: "Travel buyers need enough itinerary detail to judge a trip, while partners need a clear route to work with the company.",
    storyTitle: "From destination interest to a useful enquiry",
    storyText: "Naystrip brings tours, destinations and itinerary content into a responsive travel platform. Customer and B2B partner enquiries are part of the owner-supplied scope; the public screens show the discovery side of that work.",
    mediaTitle: "Packages that can be explored, not skimmed",
    mediaText: "The real site captures show how destination content and travel offers are presented across screen sizes. They do not claim a completed payment or booking flow where one is not visible.",
    desktopNote: "Public travel platform on desktop",
    mobileNote: "Travel discovery on a mobile viewport",
    outcomeIntro: "The work gives customer and partner journeys a shared web foundation.",
    cta: "Discuss a travel platform",
  },
  "mozno-wealth": {
    opening: "A financial advisory site has to explain its services clearly before asking anyone to start a consultation.",
    storyTitle: "Make the advice understandable before the form",
    storyText: "The responsive site organizes advisory services and gives visitors a clearer consultation path. Editorial content supports the explanation. Any specific financial tool should be verified before it becomes a visual proof point.",
    mediaTitle: "A calmer route through a high-trust service",
    mediaText: "These captures come from Mozno Wealth's public website. The visual evidence supports service discovery and consultation, while implementation technology remains unverified.",
    desktopNote: "Public advisory site on desktop",
    mobileNote: "Advisory content on a mobile viewport",
    outcomeIntro: "The delivered site supports clearer service understanding and consultation enquiries.",
    cta: "Discuss a high-trust website",
  },
  "snow-feather-adventure": {
    opening: "An adventure trip is chosen through place, itinerary and confidence in the operator—not a package name alone.",
    storyTitle: "Give the destination room to do its work",
    storyText: "The platform presents destinations, trekking packages, accommodation and itinerary detail, then offers direct routes to enquire. The visual story should let real photography and useful trip information carry the page.",
    mediaTitle: "See the journey before making contact",
    mediaText: "The public desktop and mobile captures show the destination-led experience. No booking or commercial result is inferred from the images.",
    desktopNote: "Destination-led website on desktop",
    mobileNote: "Trip content on a mobile viewport",
    outcomeIntro: "Travellers can explore a complex offering and reach the operator more directly.",
    cta: "Discuss a travel experience",
  },
  "rs-constructions": {
    opening: "Prospective construction clients need to judge capability, past work and the right route to start a conversation.",
    storyTitle: "Make capability visible",
    storyText: "The public website presents services, projects and company information in a responsive structure. A verified Clutch review also describes mobile-app and social-media work, but no app or campaign interface is shown here without approved assets.",
    mediaTitle: "Projects and services in one public place",
    mediaText: "These authentic captures show the website only. The broader review-supported scope is identified in the text rather than represented with invented screens.",
    desktopNote: "Construction company website on desktop",
    mobileNote: "Services and projects on a mobile viewport",
    outcomeIntro: "The website gives prospective clients a clearer view of services and a direct enquiry route.",
    cta: "Discuss a business website",
  },
  "continental-mercantile": {
    opening: "International recruitment serves two audiences with different questions: candidates seeking opportunities and employers seeking people.",
    storyTitle: "Two audiences, one clear service platform",
    storyText: "The responsive website explains global recruitment services and separates candidate application from employer enquiry paths. The public interface is the evidence; implementation technology has not been verified.",
    mediaTitle: "Recruitment paths that stay legible on mobile",
    mediaText: "The desktop and mobile captures show the public recruitment experience. They are not representations of a private applicant or employer system.",
    desktopNote: "International recruitment website on desktop",
    mobileNote: "Recruitment content on a mobile viewport",
    outcomeIntro: "The platform gives candidates and employers clearer ways to understand and contact the business.",
    cta: "Discuss a multi-audience platform",
  },
};

