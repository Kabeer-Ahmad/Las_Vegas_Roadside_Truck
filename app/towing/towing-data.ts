/** Shared copy for towing subpages (Las Vegas, NV area). */

export interface TowingFaqItem {
  question: string;
  answer: string;
}

export const towingPages = {
  "emergency-towing": {
    title: "Emergency Towing in Las Vegas, NV",
    heroSubtitle:
      "24/7 emergency towing on I-15, US-93, and across the Las Vegas metro—fast dispatch for commercial trucks and semis.",
    bodyIntro:
      "When you break down on I-15, US-93, or anywhere in the Las Vegas, NV metro area, you need a tow that shows up fast—not hours later.",
    bodyContent:
      "Las Vegas 24 Hour Roadside Truck Services dispatches emergency towing 24/7 for commercial vehicles, semis, and heavy equipment. We coordinate the right truck for your weight class, secure your load safely, and can deliver to your shop, yard, or our preferred repair partners in Las Vegas and Clark County. One call to (702) 863-2706 puts you in line for priority response when every minute of downtime costs money.",
    features: [
      "24/7 Las Vegas dispatch",
      "I-15 / US-93 / I-11",
      "Commercial & semi",
      "Safe load securement",
      "Shop or yard delivery",
      "Priority fleet response",
    ],
    faqItems: [
      { question: "What counts as emergency towing in Las Vegas?", answer: "Any breakdown where you’re unsafe on the shoulder, blocking traffic, or losing revenue by the minute—especially on I-15, US-93, or inside the Las Vegas metro. We treat commercial calls as priority." },
      { question: "Will you tow me to my own shop in Clark County?", answer: "Yes. Tell dispatch your preferred yard, dealer, or shop in Las Vegas or Clark County—we’ll coordinate drop-off and securement for the route." },
      { question: "How fast can a wrecker get to I-15 near Las Vegas?", answer: "ETA depends on traffic and which unit is closest. Call (702) 863-2706—dispatch quotes an estimated arrival and sends the right truck for your weight class." },
      { question: "Do you tow at night and on weekends?", answer: "Yes. Emergency towing is 24/7, including nights, weekends, and holidays for Las Vegas, NV and Southern Nevada." },
    ] satisfies TowingFaqItem[],
  },
  "heavy-duty-towing": {
    title: "Heavy Duty Towing in Las Vegas, NV",
    heroSubtitle:
      "Rotator and heavy wrecker towing for loaded semis, Class 7–8 trucks, and equipment in Southern Nevada.",
    bodyIntro:
      "Heavy-duty towing in Las Vegas, NV requires the right equipment and operators who understand air brakes, fifth wheels, and DOT rules.",
    bodyContent:
      "We tow loaded trailers, construction equipment, and Class 7–8 trucks that standard wreckers can’t handle. Whether you’re stuck near I-15, on US-93, or in an industrial park around Las Vegas, we’ll match rotator or heavy wrecker capacity to your gross weight so your unit is moved without secondary damage. Trust Las Vegas 24 Hour Roadside Truck Services for professional heavy-duty recovery across Southern Nevada.",
    features: [
      "Class 7–8 & loaded trailers",
      "Rotator / heavy wrecker",
      "DOT-safe recovery",
      "Construction equipment",
      "Southern Nevada coverage",
      "Minimal secondary damage",
    ],
    faqItems: [
      { question: "Why can’t a standard wrecker tow my loaded semi?", answer: "Gross weight and trailer configuration need a heavy wrecker or rotator rated for your load. Wrong equipment risks cable failure, frame stress, or DOT issues—we match capacity to your Las Vegas, NV job." },
      { question: "Do you tow construction equipment near Las Vegas?", answer: "Yes. We recover loaders, rollers, and other job-site equipment when the move is within our heavy-duty capability—describe weight and access when you call." },
      { question: "Is heavy-duty towing more expensive?", answer: "Rates reflect equipment type, distance, and weight class. We’re upfront about pricing before we roll so fleets near Las Vegas can budget clearly." },
      { question: "Can you tow without unloading my trailer?", answer: "Often yes, when weight and securement allow. Dispatch needs your loaded weight and cargo type to send the correct unit." },
    ] satisfies TowingFaqItem[],
  },
  "light-duty-towing": {
    title: "Light Duty Towing in Las Vegas, NV",
    heroSubtitle:
      "Pickups, vans, box trucks, and light commercial towing—Las Vegas and Clark County.",
    bodyIntro:
      "Pickup trucks, vans, box trucks, and light commercial vehicles still need reliable towing in Las Vegas, NV—especially when they’re part of your fleet.",
    bodyContent:
      "Our light-duty towing is priced fairly and scheduled quickly, ideal for local moves to a repair facility, impound coordination, or moving a disabled vehicle off a busy corridor like the I-15 frontage or major Las Vegas Valley arterials. We treat light-duty jobs with the same professionalism as heavy recoveries, so your Las Vegas-area operations stay on schedule.",
    features: [
      "Fleet light commercial",
      "Local repair tows",
      "Impound coordination",
      "Fair pricing",
      "I-15 / major corridors",
      "Same-day when possible",
    ],
    faqItems: [
      { question: "What vehicles qualify as light-duty for your Las Vegas service?", answer: "Typically pickups, vans, small box trucks, and light commercial units under heavy Class 6—ideal for fleet moves to a Las Vegas repair shop or clearing a busy street." },
      { question: "Is light-duty towing cheaper than heavy?", answer: "Yes. Light-duty rates are lower because equipment and crew requirements are smaller—ask for a quote for your Las Vegas pickup or van." },
      { question: "Can you tow from the Strip corridor or industrial areas?", answer: "Yes. We regularly run light-duty tows on major Las Vegas corridors and neighborhoods—same dispatch line (702) 863-2706." },
      { question: "Do you coordinate with impound or police?", answer: "We can work with law enforcement or lot requirements when you need a tow from an impound or accident scene—call with case details." },
    ] satisfies TowingFaqItem[],
  },
  "semi-truck-towing": {
    title: "Semi Truck Towing in Las Vegas, NV",
    heroSubtitle:
      "Tractor-trailer towing with fifth-wheel and trailer protection—Las Vegas, I-11, distribution centers.",
    bodyIntro:
      "Semi truck towing around Las Vegas, NV is what we do every week: tractors, dry vans, reefers, and flatbeds that won’t start, have brake failures, or need a winch-out.",
    bodyContent:
      "We understand clearance heights, kingpin locks, and how to protect your trailer while towing. If you’re along I-11 toward Henderson or Boulder City, or parked at a Las Vegas distribution center, call us for semi-specific towing that gets you to a safe yard or back in service as soon as possible.",
    features: [
      "Tractor + trailer",
      "Dry van / reefer / flatbed",
      "Winch-out",
      "Kingpin & clearance aware",
      "Distribution centers",
      "I-11 / I-15 corridor",
    ],
    faqItems: [
      { question: "Do you tow tractor and trailer together?", answer: "When safe and legal for the failure type, yes. Sometimes only the power unit is towed—dispatch advises based on brakes, kingpin, and Las Vegas NV access." },
      { question: "What if I’m at a Las Vegas distribution center?", answer: "We routinely service DC yards and lots—send the gate code or contact name if needed so our driver can enter quickly." },
      { question: "Can you winch a stuck semi?", answer: "Yes, when soil and angles allow. Describe mud, grade, and whether trailer is loaded so we send winch-capable equipment." },
      { question: "Will my trailer be protected during semi tow?", answer: "We use procedures that protect fifth wheel, landing gear, and trailer height clearances—our operators are trained for Las Vegas-area semis." },
    ] satisfies TowingFaqItem[],
  },
  "flatbed-towing": {
    title: "Flatbed Towing in Las Vegas, NV",
    heroSubtitle:
      "Level-deck transport for sensitive loads, low clearance, and equipment that can’t be dollied.",
    bodyIntro:
      "When a standard hook isn’t appropriate—low clearance, all-wheel drive, or a vehicle that must stay level—flatbed towing is the answer.",
    bodyContent:
      "In Las Vegas, NV, we deploy flatbeds for sensitive loads, specialty trucks, and equipment that can’t be dollied. Your cargo stays secured on the deck from pickup to drop-off, whether that’s a few miles across town or a longer haul to a regional shop. Ask for flatbed when you need maximum protection for your Las Vegas-area move.",
    features: [
      "Level load transport",
      "Low clearance OK",
      "Specialty trucks",
      "Deck securement",
      "Regional hauls",
      "Maximum cargo protection",
    ],
    faqItems: [
      { question: "When should I request flatbed instead of hook tow?", answer: "Low ground clearance, AWD concerns, specialty bodywork, or cargo that must stay level—flatbed keeps the Las Vegas load on one plane from pickup to drop-off." },
      { question: "How is my truck secured on the deck?", answer: "Chains, straps, and blocks per weight and DOT practice—your unit is tied down before we move on Las Vegas roads." },
      { question: "How far can you flatbed from Las Vegas?", answer: "Regional hauls to shops or yards are common—distance affects rate; ask dispatch for mileage pricing." },
      { question: "Is flatbed slower to schedule?", answer: "Flatbed availability can vary by time of day. Call early for fastest dispatch—we’ll tell you honest ETAs." },
    ] satisfies TowingFaqItem[],
  },
  "roadside-assistance": {
    title: "Roadside Assistance in Las Vegas, NV",
    heroSubtitle:
      "On-site repairs and triage—air leaks, hoses, belts, diagnostics—so you may avoid a full tow.",
    bodyIntro:
      "Beyond towing, our roadside assistance in Las Vegas, NV covers the fixes that keep you rolling without a full tow.",
    bodyContent:
      "Minor air leaks, hose replacements, belt issues, and diagnostic support on site. We’re mobile-first—our units carry tools and parts common to fleet breakdowns. If we can repair you roadside, we will; if not, we’ll tow you to the right facility. Las Vegas drivers and fleet managers rely on us for honest triage and fast arrival times.",
    features: [
      "Air & hose repairs",
      "Belt replacement",
      "Fault diagnostics",
      "Mobile parts common stock",
      "Tow only if needed",
      "Fleet-friendly triage",
    ],
    faqItems: [
      { question: "What can you fix without towing in Las Vegas?", answer: "Minor air leaks, some hoses and belts, basic diagnostics, and triage to see if you can drive to a shop—we carry common fleet consumables on mobile units." },
      { question: "If you can’t fix it roadside, what happens?", answer: "We explain honestly and can tow you to a trusted Las Vegas-area facility so you’re not stranded guessing." },
      { question: "Do fleets get priority roadside?", answer: "We work hard for all commercial callers—fleets with account setups get streamlined dispatch; ask about Las Vegas fleet options." },
      { question: "Is roadside assistance the same as emergency repair?", answer: "Roadside is broader: quick fixes plus tow if needed. Emergency repair pages focus on mechanical repair—both start with (702) 863-2706." },
    ] satisfies TowingFaqItem[],
  },
  "fuel-delivery": {
    title: "Fuel Delivery in Las Vegas, NV",
    heroSubtitle:
      "Diesel delivered to your semi or commercial truck—Las Vegas, Henderson, I-15 corridor.",
    bodyIntro:
      "Out of diesel on the shoulder near Las Vegas, NV? We deliver fuel to your location—diesel for semis and commercial trucks.",
    bodyContent:
      "You’re not walking to the nearest exit or risking a contaminated jug fill. We bring enough to reach the next safe fuel stop or your yard, with proper handling and spill awareness. Fuel delivery pairs with our broader roadside program; one call covers Las Vegas, Henderson, and the I-15 corridor when you’re empty.",
    features: [
      "Diesel for semis",
      "Shoulder & lot delivery",
      "Proper handling",
      "Henderson & I-15",
      "Enough to next stop",
      "24/7 with dispatch",
    ],
    faqItems: [
      { question: "What fuel do you deliver to stranded trucks?", answer: "On-road diesel for semis and commercial trucks—enough to reach the next safe pump or your Las Vegas, NV yard." },
      { question: "I’m empty on I-15—how long until fuel arrives?", answer: "Typical window is similar to other roadside calls; dispatch gives an ETA based on Henderson/Las Vegas traffic and unit location." },
      { question: "Do I need to prime after you add diesel?", answer: "If you ran completely dry, priming may be needed—we can assist so you’re not stuck cranking." },
      { question: "Is spill risk handled safely?", answer: "We use proper containers and spill awareness—tell us if you’re on a slope or tight shoulder near Las Vegas." },
    ] satisfies TowingFaqItem[],
  },
  "tire-change-service": {
    title: "Tire Change Service in Las Vegas, NV",
    heroSubtitle:
      "Commercial tire change roadside—steer, drive, trailer—proper torque and DOT-ready.",
    bodyIntro:
      "Commercial tire change service in Las Vegas, NV means the right size, proper torque, and DOT-ready wheels.",
    bodyContent:
      "We handle steer, drive, and trailer positions on site—flats, blowouts, and dual replacements. Our techs work fast on I-15 and US-93 pull-offs and at Las Vegas warehouses so you’re not losing a full day to a single tire. Combine tire service with towing if the rim or hub needs shop attention.",
    features: [
      "Steer / drive / trailer",
      "Blowouts & duals",
      "I-15 / US-93 pull-offs",
      "Warehouse calls",
      "Torque to spec",
      "Tow if rim damage",
    ],
    faqItems: [
      { question: "Do you change steer tires on the shoulder near Las Vegas?", answer: "Yes—steer, drive, and trailer positions when we have your size in stock or on the truck. I-15/US-93 pull-offs are common call sites." },
      { question: "How long does a commercial tire change take?", answer: "Often 30–60 minutes depending on duals, rusted studs, and access—warehouses usually faster than narrow shoulders." },
      { question: "What if the rim is bent?", answer: "We’ll inspect—severe rim damage may require tow to a Las Vegas shop for wheel replacement before safe roll." },
      { question: "Do you torque lug nuts to spec?", answer: "Yes. DOT-minded torque and pattern matter—we treat commercial wheels seriously." },
    ] satisfies TowingFaqItem[],
  },
  "jump-start-service": {
    title: "Jump Start Service in Las Vegas, NV",
    heroSubtitle:
      "Heavy-duty jump equipment for commercial starting loads—safe for alternator and electrical.",
    bodyIntro:
      "Dead batteries on a big rig need more than a passenger jump pack. In Las Vegas, NV, we bring heavy-duty jump equipment sized for commercial starting loads.",
    bodyContent:
      "Safe for your electrical system and alternator. We’ll test charging after start and advise if you need a battery or alternator replacement. Fast jump-start service keeps you from missing delivery windows when you’re parked in Las Vegas or the surrounding Southern Nevada area.",
    features: [
      "Heavy-duty packs",
      "Commercial cranking amps",
      "Charging test after start",
      "Battery advice",
      "Southern Nevada coverage",
      "Delivery window friendly",
    ],
    faqItems: [
      { question: "Why won’t a car jump box start my semi?", answer: "Commercial engines need far more cranking amps and stable voltage—our Las Vegas jump service uses equipment sized for big blocks and high compression." },
      { question: "Will a jump hurt my alternator?", answer: "We connect correctly and test charging after start. If the alternator’s failing, we’ll tell you before you lose another load." },
      { question: "Do you replace batteries roadside?", answer: "We can advise and often source replacement—ask dispatch if you want battery service after the jump in Southern Nevada." },
      { question: "How fast for jump start in Las Vegas?", answer: "Same dispatch queue as other roadside—call (702) 863-2706 for ETA to your parking lot or shoulder." },
    ] satisfies TowingFaqItem[],
  },
  "vehicle-lockout-service": {
    title: "Vehicle Lockout Service in Las Vegas, NV",
    heroSubtitle:
      "Cab and trailer lockout—professional tools, no damage to doors or seals.",
    bodyIntro:
      "Locked out of your cab or trailer in Las Vegas, NV? Our lockout service uses professional tools and techniques to regain entry without damage.",
    bodyContent:
      "We service commercial vehicles and trailers—cab access, toolboxes, and cargo areas where keys are misplaced. Discreet, quick, and available when you’re stranded at a Las Vegas shipper, rest area, or job site.",
    features: [
      "Cab & trailer",
      "Toolboxes & cargo",
      "No damage entry",
      "Shippers & rest areas",
      "Discreet service",
      "Fast response",
    ],
    faqItems: [
      { question: "Can you open my cab without scratching paint?", answer: "We use commercial lockout tools and techniques aimed at zero damage—doors, seals, and locks stay intact when possible." },
      { question: "Do you unlock trailer doors and toolboxes?", answer: "Yes—cab, trailer cargo doors, and toolboxes when keys are lost or locked inside." },
      { question: "How fast is lockout service in Las Vegas?", answer: "We target the same 45–60 minute window as other NV roadside when traffic allows—nights included." },
      { question: "What if my key fob died inside the sleeper?", answer: "We still gain entry professionally—then you can retrieve the fob or arrange a spare. Call from any Las Vegas shipper or rest area." },
    ] satisfies TowingFaqItem[],
  },
} as const;

export type TowingSlug = keyof typeof towingPages;
