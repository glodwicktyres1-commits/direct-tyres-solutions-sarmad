export type ServiceSlug =
  | "tyre-puncture-repair"
  | "tyre-replacement"
  | "emergency-tyre-fitting"
  | "locking-wheel-nut-removal";

/** Paragraph text; `[label](/path)` renders as an internal link. */
export type ServiceContentBlock = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs rendered after the list. */
  after?: string[];
};

export type ServicePageData = {
  slug: ServiceSlug;
  /** Short name used in breadcrumb and "Other services" links. */
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1Line1: string;
  h1Line2: string;
  intro: string;
  topLine: string;
  blocks: ServiceContentBlock[];
  stepsHeading: string;
  steps: string[];
  areasHeading: string;
  areasParagraphs: string[];
  whyList: string[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaText: string;
};

export const servicePages: Record<ServiceSlug, ServicePageData> = {
  "tyre-puncture-repair": {
    slug: "tyre-puncture-repair",
    shortLabel: "Puncture Repair",
    metaTitle: "Tyre Puncture Repair Manchester | Direct Tyre Solutions",
    metaDescription:
      "Mobile tyre puncture repair in Manchester and nearby areas, 24/7. We come to you, repair the puncture on site and get you moving. Call now.",
    badge: "30–45 min average response",
    h1Line1: "Mobile Tyre Puncture",
    h1Line2: "Repair in Manchester",
    intro:
      "A puncture never happens when it suits you. If you have a puncture, Direct Tyre Solutions can send a fully equipped mobile van to your home, workplace or the roadside, day or night. We repair the tyre where you are, so there is no tow, no waiting room and no limping to a garage on a spare wheel.",
    topLine:
      "We are a family business that has been on the road since 1996, and our average response time is 30 to 45 minutes. Call 07955 266 077 or message us on WhatsApp and we will get a technician on the way.",
    blocks: [
      {
        heading: "Car Tyre Puncture Repair, Done Where You Are",
        paragraphs: [
          "Our mobile service brings the workshop to you. Every van carries the same tools you would find in a traditional garage, so the repair is carried out properly, without you leaving your driveway or car park.",
          "Our technicians are certified and fully insured, so you can be confident your tyre is in safe hands.",
        ],
      },
      {
        heading: "Need a Replacement Instead?",
        paragraphs: [
          "If your tyre cannot be repaired, we can replace it on site.",
          "We offer a wide range of premium brands at competitive prices, all fitted on site. You can read more on our [tyre replacement page](/services/tyre-replacement).",
        ],
      },
    ],
    stepsHeading: "How Our Tyre Puncture Repair Works",
    steps: [
      "Call or WhatsApp us and tell us where you are, what car you drive and what has happened.",
      "We give you an honest price and an arrival time before we send a van.",
      "Your technician arrives at your home, workplace or roadside.",
      "We repair your tyre on site.",
      "You pay by card and you are back on the road.",
    ],
    areasHeading: "Tyre Puncture Repair Manchester and Surrounding Areas",
    areasParagraphs: [
      "We cover Manchester, Salford, Stockport, Oldham, Bolton, Bury, Trafford and Wigan, as well as parts of Cheshire, Lancashire and West Yorkshire. Not sure if we reach you? Check our [areas we cover](/areas-we-cover) page or call us with your postcode and we will confirm.",
    ],
    whyList: [
      "Average response time of 30 to 45 minutes",
      "Fully insured and certified technicians",
      "Available 24 hours a day, every day",
      "All major cards accepted",
      "Rated 4.9 from over 500 reviews",
      "100% satisfaction guarantee. If you are not happy, we will make it right.",
    ],
    faqs: [
      {
        q: "How much does a mobile puncture repair cost?",
        a: "Call us and we will give you an honest price before we send a van.",
      },
      {
        q: "Do I need to drive to you?",
        a: "No. We come to you, whether you are at home, at work or stuck at the roadside.",
      },
      {
        q: "Can you repair a puncture at night?",
        a: "Yes. We are open 24 hours a day, so a late night puncture is no problem. Our [emergency tyre fitting](/services/emergency-tyre-fitting) page has more detail.",
      },
      {
        q: "What if my tyre cannot be repaired?",
        a: "We can replace it. We offer a wide range of premium brands, all fitted on site.",
      },
      {
        q: "Do you accept card payments?",
        a: "Yes. We accept all major cards.",
      },
    ],
    ctaHeading: "Got a Puncture? Call Us Now",
    ctaText:
      "Whether you need tyre puncture repair in Manchester or somewhere nearby, we are ready 24/7. Call 07955 266 077 or message us on WhatsApp and we will have a van on its way.",
  },

  "tyre-replacement": {
    slug: "tyre-replacement",
    shortLabel: "Tyre Replacement",
    metaTitle: "Mobile Tyre Replacement Manchester | Direct Tyre Solutions",
    metaDescription:
      "Mobile car tyre replacement in Manchester, fitted at your home, work or roadside. Premium brands at competitive prices. Call Direct Tyre Solutions today.",
    badge: "Premium brands, fitted on site",
    h1Line1: "Mobile Tyre Replacement",
    h1Line2: "in Manchester",
    intro:
      "Need a new tyre but cannot spare the time to sit in a garage? Direct Tyre Solutions offers mobile tyre replacement across Manchester and the surrounding areas. We bring the tyre and the tools to your driveway, car park or the roadside, and fit it while you get on with your day.",
    topLine:
      "We offer a wide range of premium brands at competitive prices, all fitted on site. As a family business since 1996, we know that a new tyre should be simple, fair and quick. Call 07955 266 077 to get started.",
    blocks: [
      {
        heading: "Mobile Car Tyre Replacement at Your Door",
        paragraphs: [
          "Our service takes the hassle out of tyre changes. There is no booking a garage slot, no dropping the car off and no waiting around. Our vans carry the same equipment you would find in a traditional workshop, so the job is done to the same standard, just at your door.",
          "We will fit your tyre wherever suits you, including at home, at work or by the roadside.",
        ],
      },
      {
        heading: "Premium Brands, Competitive Prices",
        paragraphs: ["Here is what you can expect from our tyre replacement service:"],
        list: [
          "A wide range of premium tyre brands",
          "Competitive prices",
          "Tyres fitted on site",
          "A fully insured service with certified technicians",
          "Card payments accepted",
        ],
        after: [
          "Not sure what you need? Call our team and describe the problem. We will tell you exactly what service applies and give you an honest price before we dispatch a van. Take a look at our [tyre puncture repair](/services/tyre-puncture-repair) page for more on that.",
        ],
      },
    ],
    stepsHeading: "How Our Tyre Replacement Works",
    steps: [
      "Call or WhatsApp us and tell us what you need.",
      "We give you an honest price before we send a van.",
      "Our technician arrives and fits your new tyre on site.",
      "We balance the wheel and tighten the nuts to the correct setting.",
      "You pay by card and you are back on the road.",
    ],
    areasHeading: "Tyre Replacement Manchester and Surrounding Areas",
    areasParagraphs: [
      "We cover the city centre and suburbs such as Didsbury, Chorlton and Wythenshawe. We also cover Salford, Stockport, Oldham, Bolton, Bury and Trafford, along with parts of Cheshire, Lancashire and West Yorkshire. See the full list on our [areas we cover](/areas-we-cover) page.",
    ],
    whyList: [
      "We come to you, so you save the trip to a garage",
      "Premium tyre brands at competitive prices",
      "Average response time of 30 to 45 minutes",
      "Fully insured and certified technicians",
      "All major cards accepted",
      "Rated 4.9 from over 500 reviews",
      "100% satisfaction guarantee. If you are not happy, we will make it right.",
    ],
    faqs: [
      {
        q: "Can you fit a new tyre at my home or workplace?",
        a: "Yes. That is the whole point of our mobile service. We fit tyres wherever it is safe and convenient for you.",
      },
      { q: "Do you accept card payments?", a: "Yes. We accept all major cards." },
      {
        q: "Which tyre brands do you fit?",
        a: "We offer a wide range of premium brands at competitive prices, all fitted on site.",
      },
      {
        q: "Do you offer emergency tyre replacement?",
        a: "Yes. If you are stuck, call us any time of day or night. You can find out more on our [emergency tyre fitting](/services/emergency-tyre-fitting) page.",
      },
      {
        q: "How much does a new tyre cost?",
        a: "Call us and we will give you an honest price before we dispatch a van.",
      },
    ],
    ctaHeading: "Need a New Tyre? Call Us Now",
    ctaText:
      "For mobile tyre replacement in Manchester and beyond, call 07955 266 077 or message us on WhatsApp. We will come to you.",
  },

  "emergency-tyre-fitting": {
    slug: "emergency-tyre-fitting",
    shortLabel: "Emergency Fitting",
    metaTitle: "24 Hour Mobile Tyre Fitting Manchester | Direct Tyre Solutions",
    metaDescription:
      "24 hour emergency mobile tyre fitting in Manchester. Flat tyre or blowout? We come to you day or night, with a 30 to 45 minute average response. Call now.",
    badge: "Open 24 hours, every day",
    h1Line1: "24 Hour Emergency Mobile",
    h1Line2: "Tyre Fitting in Manchester",
    intro:
      "A flat tyre at 2am is nobody's idea of fun. When it happens, you need someone who will answer the phone and actually turn up. Direct Tyre Solutions provides emergency mobile tyre fitting around the clock, and we come to wherever you are stuck, whether that is your driveway, your workplace or the side of the road.",
    topLine:
      "Our average response time is 30 to 45 minutes. Call 07955 266 077 or message us on WhatsApp and we will get a van moving.",
    blocks: [
      {
        heading: "Emergency Tyre Call Out, Day or Night",
        paragraphs: [
          "Our emergency tyre call out service runs 24 hours a day. There is no need to wait until morning or find a garage that is open. Our vans are fully equipped, so the work is done at the scene and you can get on with your journey.",
          "We are a family business that has been on the road since 1996, and we know how stressful a tyre emergency can be. Our job is to make it as quick and calm as possible.",
        ],
      },
      {
        heading: "Tyre Repair or Tyre Replacement",
        paragraphs: ["What you need depends on what has happened to the tyre."],
        list: [
          "Repair: if you have a puncture, we can repair it on site. See our [tyre puncture repair](/services/tyre-puncture-repair) page for more.",
          "Replacement: if your tyre needs replacing, we can fit a new one on site. See our [tyre replacement](/services/tyre-replacement) page for more.",
        ],
        after: [
          "Not sure which one you need? Describe the problem when you call and we will tell you honestly what is needed and give you a price before we send a van.",
        ],
      },
      {
        heading: "We Answer at Any Hour",
        paragraphs: [
          "When you are stranded, what you really want to know is whether someone will answer. We do, at any hour. We cover Greater Manchester, Cheshire, Lancashire and West Yorkshire, and we run dispatch routes from city centres to rural villages.",
        ],
      },
      {
        heading: "Experienced Technicians You Can Trust",
        paragraphs: [
          "When something goes wrong with your tyres, you want experienced hands. Our technicians are certified, fully insured and experienced. We are rated 4.9 from over 500 reviews, and we back every job with a 100% satisfaction guarantee. If you are not happy, we will make it right.",
        ],
      },
    ],
    stepsHeading: "How to Reach Us",
    steps: [
      "Call 07955 266 077 and tell us where you are",
      "Message us on WhatsApp if you prefer",
      "Describe the problem and tell us what car you drive",
      "We give you an honest price and confirm your arrival time before we send a van",
      "A van is on its way, with an average response of 30 to 45 minutes",
    ],
    areasHeading: "24 Hour Mobile Tyre Fitting Manchester",
    areasParagraphs: [
      "We cover the city centre and areas including Salford, Stockport, Oldham, Bolton, Bury, Trafford, Wigan and Warrington. We dispatch vans well beyond our listed areas too. Check our [areas we cover](/areas-we-cover) page or call us and we will confirm for your postcode.",
    ],
    whyList: [
      "Open 24 hours a day, every day",
      "Average response time of 30 to 45 minutes",
      "We come to you, wherever you are",
      "Fully insured and certified technicians",
      "All major cards accepted",
      "Honest price before we dispatch a van",
    ],
    faqs: [
      {
        q: "Are you really available 24 hours a day?",
        a: "Yes. Our emergency call outs run day and night, so you can call us at any hour.",
      },
      {
        q: "How quickly can you get to me?",
        a: "Our average response time is 30 to 45 minutes. When you call, we will confirm an arrival time for your exact location.",
      },
      {
        q: "Can you fit a tyre at the roadside?",
        a: "Yes. We fit tyres at your home, your workplace or the roadside.",
      },
      {
        q: "Do you come out to homes and workplaces?",
        a: "Yes. We are happy to come to your home, your workplace or wherever you have broken down.",
      },
      {
        q: "How much does an emergency call out cost?",
        a: "Call us and we will give you an honest price before we send a van.",
      },
      { q: "Can I pay by card?", a: "Yes. We accept all major cards." },
    ],
    ctaHeading: "Tyre Emergency? Call Us Now",
    ctaText:
      "For emergency mobile tyre fitting in Manchester and beyond, call 07955 266 077 or message us on WhatsApp. We are ready 24/7.",
  },

  "locking-wheel-nut-removal": {
    slug: "locking-wheel-nut-removal",
    shortLabel: "Locking Nut Removal",
    metaTitle: "Locking Wheel Nut Removal Manchester | Direct Tyre Solutions",
    metaDescription:
      "Lost your locking wheel nut key? We offer safe locking wheel nut removal in Manchester, at your home, work or roadside. Call Direct Tyre Solutions.",
    badge: "Safe removal, no wheel damage",
    h1Line1: "Locking Wheel Nut",
    h1Line2: "Removal in Manchester",
    intro:
      "Lost the key to your locking wheel nut? Snapped it in the lock, or rounded off the nut while trying to get it off? It is a common problem, and it can leave you unable to change a wheel when you need to most. Direct Tyre Solutions offers locking wheel nut removal that is designed to take the nut off safely, without damaging your wheel.",
    topLine:
      "We come to you, whether you are at home, at work or stuck at the roadside. Call 07955 266 077 or message us on WhatsApp and we will arrange a visit.",
    blocks: [
      {
        heading: "Lost or Damaged Locking Wheel Nut Key?",
        paragraphs: [
          "A locking wheel nut can be a real headache when you cannot get it off. We can help if:",
        ],
        list: [
          "The locking wheel nut key has been lost or misplaced",
          "The key has broken or snapped in the nut",
          "The nut has been rounded off or damaged by the wrong tool",
          "You have bought a used car and the key was not included",
          "You cannot remove the nut for any other reason",
        ],
        after: ["Whatever the cause, we remove the nut without damage."],
      },
      {
        heading: "Why Use a Professional Locking Wheel Nut Remover?",
        paragraphs: [
          "Our service is safe removal of locking wheel nuts without damage. Our technicians are certified and fully insured, and we come to you.",
          "Trying to force a locking nut off with the wrong tool usually makes things worse. It can round the nut, crack the key or leave scratches on your alloy wheel. Our technicians use proper removal equipment designed for the job, so the nut comes off cleanly and your wheel stays unmarked.",
        ],
        list: [
          "No damage to your wheel or studs",
          "Specialist removal tools for every nut type",
          "Certified and fully insured technicians",
          "We come to your home, work or roadside",
          "Honest price agreed before we start",
        ],
        after: [
          "Once the nut is off, we can fit a standard nut or a new locking set so your wheels stay secure.",
        ],
      },
      {
        heading: "Need a Tyre Change at the Same Time?",
        paragraphs: [
          "If you also need a puncture repaired or a tyre replaced, we offer both. See our [tyre puncture repair](/services/tyre-puncture-repair) and [tyre replacement](/services/tyre-replacement) pages, or tell us what you need when you call.",
        ],
      },
    ],
    stepsHeading: "How Our Locking Wheel Nut Removal Works",
    steps: [
      "Call or WhatsApp us and tell us where you are and what car you drive.",
      "We give you an honest price and an arrival time before we send a van.",
      "Our technician arrives at your home, workplace or roadside.",
      "We remove the locking wheel nut safely, without damage.",
      "You pay by card and you are on your way.",
    ],
    areasHeading: "Locking Wheel Nut Removal Manchester and Surrounding Areas",
    areasParagraphs: [
      "We cover the city centre and areas such as Salford, Stockport, Oldham, Bolton, Bury and Trafford, along with parts of Cheshire, Lancashire and West Yorkshire. See the full list on our [areas we cover](/areas-we-cover) page.",
      "If your problem cannot wait until morning, we are available 24 hours a day. Take a look at our [emergency tyre fitting](/services/emergency-tyre-fitting) page for more.",
    ],
    whyList: [
      "Safe removal without damage to your wheel",
      "We come to you, wherever you are",
      "Average response time of 30 to 45 minutes",
      "Fully insured and certified technicians",
      "Available 24 hours a day, every day",
      "Rated 4.9 from over 500 reviews",
      "100% satisfaction guarantee. If you are not happy, we will make it right.",
    ],
    faqs: [
      {
        q: "Will removing the locking wheel nut damage my wheel?",
        a: "Our service is designed to remove locking wheel nuts without damage.",
      },
      {
        q: "Can you remove a locking wheel nut at the roadside?",
        a: "Yes. We come to your home, your workplace or the roadside.",
      },
      {
        q: "I have lost my key. Can you still help?",
        a: "Yes. We remove locking wheel nuts safely, without damage.",
      },
      { q: "Do you accept card payments?", a: "Yes. We accept all major cards." },
      {
        q: "How much does locking wheel nut removal cost?",
        a: "Call us and we will give you an honest price before we send a van.",
      },
    ],
    ctaHeading: "Stuck With a Locking Wheel Nut? Call Us Now",
    ctaText:
      "For locking wheel nut removal in Manchester and the surrounding areas, call 07955 266 077 or message us on WhatsApp. We will come to you.",
  },
};

/** Short labels for the "Other services" card, in display order. */
export const otherServiceLinks: { slug: ServiceSlug; label: string }[] = [
  { slug: "tyre-puncture-repair", label: "Puncture Repair" },
  { slug: "tyre-replacement", label: "Tyre Replacement" },
  { slug: "emergency-tyre-fitting", label: "Emergency Fitting" },
  { slug: "locking-wheel-nut-removal", label: "Locking Nut Removal" },
];
