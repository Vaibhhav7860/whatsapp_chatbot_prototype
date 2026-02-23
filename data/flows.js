import { EVENT, AGENDA, SPEAKERS, FAQS } from "./event";
import { EXHIBITORS } from "./exhibitors";

export function getRegistrationFlow() {
    return [
        { type: "bot", content: `👋 Welcome to *${EVENT.name}*!\n\nI'll help you register for the event. Let's get started.`, delay: 800 },
        { type: "bot", content: "What is your *full name*?", delay: 1000 },
        { type: "input", placeholder: "Enter your full name", field: "name" },
        { type: "bot", content: "Great! What's your *email address*?", delay: 1000 },
        { type: "input", placeholder: "Enter your email", field: "email" },
        { type: "bot", content: "Which *company/organization* are you from?", delay: 1000 },
        { type: "input", placeholder: "Enter company name", field: "company" },
        { type: "bot", content: "What's your *role/designation*?", delay: 1000, buttons: [{ label: "Developer" }, { label: "Designer" }, { label: "Manager" }] },
        { type: "bot", content: "✅ *Registration Successful!*\n\nHere are your details:\n👤 Attendee registered\n📅 ${EVENT.dates}\n📍 ${EVENT.venue}\n\nYour *digital ticket* is below 👇", delay: 1500 },
        { type: "bot-media", content: "🎫 *TechSummit2026 — E-Pass*", mediaType: "ticket", delay: 1000 },
        { type: "bot", content: "Show this QR code at the registration desk for a *contactless check-in*. See you there! 🎉", delay: 800 },
    ];
}

export function getTicketFlow() {
    return [
        { type: "bot", content: "🎫 Here's your *digital ticket* for TechSummit2026:", delay: 800 },
        { type: "bot-media", content: "🎫 *TechSummit2026 — E-Pass*\n\n👤 Attendee\n📅 March 15–17, 2026\n📍 Pragati Maidan, New Delhi\n🆔 TS2026-4829", mediaType: "ticket", delay: 1200 },
        { type: "bot", content: "📱 Show this QR code at the venue entrance for *instant check-in*.\n\nNeed anything else? Type *menu* anytime.", delay: 800 },
    ];
}

export function getAgendaFlow() {
    return [
        {
            type: "bot", content: `📅 *${EVENT.name} — Event Agenda*\n\nSelect a day to view the schedule:`, delay: 800,
            buttons: AGENDA.map((d) => ({ label: d.day.split("—")[0].trim() })),
            onSelect: (option) => {
                const dayIndex = option.label.includes("1") ? 0 : option.label.includes("2") ? 1 : 2;
                const day = AGENDA[dayIndex];
                return day.sessions.map((s, i) => ({
                    type: "bot",
                    content: `${i === 0 ? `📋 *${day.day}*\n\n` : ""}🕐 *${s.time}*\n📌 ${s.title}\n🎤 ${s.speaker}\n📍 ${s.hall}\n🏷️ _${s.track}_`,
                    delay: i === 0 ? 800 : 600,
                }));
            },
        },
    ];
}

export function getSpeakersFlow() {
    return [
        {
            type: "bot", content: "🎤 *Our Speakers*\n\nSelect a speaker to learn more:", delay: 800,
            buttons: SPEAKERS.slice(0, 3).map((s) => ({ label: s.name.split(" ").slice(0, 2).join(" ") })),
            onSelect: (option) => {
                const speaker = SPEAKERS.find((s) => s.name.includes(option.label.split(" ")[0]));
                if (!speaker) return [];
                return [
                    { type: "bot-media", content: `🎤 *${speaker.name}*\n${speaker.role}\n\n${speaker.bio}`, mediaType: "speaker", speakerName: speaker.name, delay: 1200 },
                    {
                        type: "bot", content: "Want to see more speakers?", delay: 800,
                        buttons: [{ label: "More Speakers" }, { label: "Back to Menu" }],
                        onSelect: (opt) => {
                            if (opt.label === "More Speakers") {
                                return SPEAKERS.slice(3, 6).map((s) => ({
                                    type: "bot-media", content: `🎤 *${s.name}*\n${s.role}\n\n${s.bio}`, mediaType: "speaker", speakerName: s.name, delay: 800,
                                }));
                            }
                            return [{ type: "bot", content: "Sure! Type *menu* to see all options. 👋", delay: 600 }];
                        },
                    },
                ];
            },
        },
    ];
}

export function getReminderFlow() {
    return [
        { type: "bot", content: "⏰ *Session Reminder*", delay: 600 },
        { type: "bot", content: `📢 Hey! Just a heads-up:\n\n🎯 *\"AI in Events\"* starts in *30 minutes*\n🕐 Time: 02:00 PM\n📍 Venue: Workshop Room 1\n🎤 Speaker: Neha Gupta\n\nDon't miss it! 🚀`, delay: 1200 },
        { type: "bot", content: "💡 _This is an automated session reminder. You're receiving this because you marked this session as interested._", delay: 800 },
    ];
}

export function getAnnouncementFlow() {
    return [
        { type: "bot", content: "📢 *Event Announcement*", delay: 600 },
        { type: "bot", content: `🔔 *Important Update from TechSummit2026*\n\n🍽️ Lunch break has been *extended to 2:30 PM* today due to a special networking session in the Grand Lobby.\n\n☕ Additional coffee stations are available near Hall B.\n\nEnjoy the event! 🎉`, delay: 1200 },
    ];
}

export function getFAQFlow() {
    return [
        {
            type: "bot", content: "❓ *Frequently Asked Questions*\n\nWhat would you like to know?", delay: 800,
            buttons: FAQS.slice(0, 3).map((f) => ({ label: f.q.length > 20 ? f.q.slice(0, 18) + "..." : f.q })),
            onSelect: (option) => {
                const faq = FAQS.find((f) => f.q.startsWith(option.label.replace("...", "")));
                return [
                    { type: "bot", content: faq ? faq.a : "I don't have that info. Please visit the help desk.", delay: 1000 },
                    {
                        type: "bot", content: "More questions?", delay: 800,
                        buttons: FAQS.slice(3, 6).map((f) => ({ label: f.q.length > 20 ? f.q.slice(0, 18) + "..." : f.q })),
                        onSelect: (opt2) => {
                            const faq2 = FAQS.find((f) => f.q.startsWith(opt2.label.replace("...", "")));
                            return [{ type: "bot", content: faq2 ? faq2.a : "Please contact our helpdesk for more info.", delay: 1000 }];
                        },
                    },
                ];
            },
        },
    ];
}

export function getVenueMapFlow() {
    return [
        { type: "bot", content: "🗺️ *Venue Map — Pragati Maidan, New Delhi*", delay: 800 },
        { type: "bot-media", content: "📍 *Pragati Maidan Convention Centre*\n\n🏛️ Main Auditorium — Ground Floor\n🅰️ Hall A — 1st Floor East\n🅱️ Hall B — 1st Floor West\n🔧 Workshop Rooms — 2nd Floor\n🍽️ Dining Hall — Ground Floor North", mediaType: "map", delay: 1200 },
        { type: "bot-location", content: "📍 *Pragati Maidan, New Delhi*", lat: 28.6189, lng: 77.2480, delay: 800 },
        { type: "bot", content: "📌 Follow the directional signs inside the venue. Information kiosks are available at each floor entrance.", delay: 800 },
    ];
}

export function getDocumentsFlow() {
    return [
        {
            type: "bot", content: "📄 *Event Documents*\n\nWhich document would you like?", delay: 800,
            buttons: [{ label: "📑 Event Brochure" }, { label: "📋 Schedule PDF" }, { label: "🗺️ Venue Guide" }],
            onSelect: (option) => {
                const docName = option.label.replace(/[📑📋🗺️]/g, "").trim();
                return [
                    { type: "bot-document", content: `📎 *${docName}*\n📦 PDF • 2.4 MB`, docName, delay: 1200 },
                    { type: "bot", content: "Tap the document above to download. Need another document?", delay: 800 },
                ];
            },
        },
    ];
}

export function getExhibitorsFlow() {
    return [
        {
            type: "bot", content: "🏢 *Exhibitor Directory*\n\nBrowse by category:", delay: 800,
            buttons: [{ label: "AI / ML" }, { label: "Cloud" }, { label: "All Exhibitors" }],
            onSelect: (option) => {
                let filtered = EXHIBITORS;
                if (option.label === "AI / ML") filtered = EXHIBITORS.filter((e) => e.category.includes("AI"));
                else if (option.label === "Cloud") filtered = EXHIBITORS.filter((e) => e.category.includes("Cloud"));
                return filtered.slice(0, 4).map((ex, i) => ({
                    type: "bot",
                    content: `${i === 0 ? "📋 *Results:*\n\n" : ""}🏢 *${ex.name}*\n📍 Booth: ${ex.booth}\n🏷️ ${ex.category}\n📝 ${ex.description}\n📧 ${ex.contact}`,
                    delay: i === 0 ? 800 : 600,
                }));
            },
        },
    ];
}

export function getFeedbackFlow() {
    return [
        { type: "bot", content: "📝 *Event Feedback*\n\nWe'd love to hear from you! This will take less than a minute.", delay: 800 },
        { type: "bot", content: "How would you rate your *overall experience* at TechSummit2026?", delay: 1000 },
        {
            type: "rating", max: 5, onSelect: (rating) => {
                return [
                    { type: "bot", content: rating >= 4 ? "🎉 Wonderful! Glad you enjoyed it!" : "Thanks for sharing. We'll work to improve!", delay: 1000 },
                    { type: "bot", content: "What did you *enjoy the most*?", delay: 800 },
                    { type: "input", placeholder: "Tell us what you liked...", field: "liked" },
                    { type: "bot", content: "Any *suggestions for improvement*?", delay: 800 },
                    { type: "input", placeholder: "Share your suggestions...", field: "suggestions" },
                    { type: "bot", content: "✅ *Thank you for your feedback!*\n\nYour responses help us make TechSummit even better next year. See you in 2027! 🚀", delay: 1200 },
                ];
            }
        },
    ];
}

export function getMultiLanguageFlow() {
    return [
        {
            type: "bot", content: "🌐 *Language Selection*\n\nPlease choose your preferred language:", delay: 800,
            buttons: [{ label: "🇬🇧 English" }, { label: "🇮🇳 हिन्दी" }, { label: "🇪🇸 Español" }],
            onSelect: (option) => {
                if (option.label.includes("हिन्दी")) {
                    return [
                        { type: "bot", content: "✅ भाषा *हिन्दी* में बदल दी गई है।", delay: 800 },
                        { type: "bot", content: `🙏 *${EVENT.name}* में आपका स्वागत है!\n\n📅 तिथि: 15-17 मार्च, 2026\n📍 स्थान: प्रगति मैदान, नई दिल्ली\n\nमैं आपकी कैसे मदद कर सकता हूँ?`, delay: 1200 },
                    ];
                } else if (option.label.includes("Español")) {
                    return [
                        { type: "bot", content: "✅ Idioma cambiado a *Español*.", delay: 800 },
                        { type: "bot", content: `🙏 ¡Bienvenido/a a *${EVENT.name}*!\n\n📅 Fecha: 15-17 de marzo, 2026\n📍 Lugar: Pragati Maidan, Nueva Delhi\n\n¿Cómo puedo ayudarle?`, delay: 1200 },
                    ];
                }
                return [
                    { type: "bot", content: "✅ Language set to *English*.", delay: 800 },
                    { type: "bot", content: `Welcome to *${EVENT.name}*! 🚀\n\n📅 Date: ${EVENT.dates}\n📍 Venue: ${EVENT.venue}\n\nHow can I help you today?`, delay: 1200 },
                ];
            },
        },
    ];
}

export function getEmergencyFlow() {
    return [
        { type: "bot", content: "🚨🚨🚨 *EMERGENCY ALERT* 🚨🚨🚨", delay: 400 },
        { type: "bot", content: `⚠️ *IMPORTANT SAFETY NOTICE*\n\n🚪 Please proceed to the nearest exit via *Gate B*.\n📍 Assembly Point: *Parking Zone P3*\n📞 Emergency Contact: ${EVENT.emergencyContact}\n\n🚶 Walk — do not run.\n🚫 Do not use elevators.\n👥 Help those around you.\n\n_This is an automated safety alert from event management._`, delay: 1000 },
    ];
}

export function getPostEventFlow() {
    return [
        { type: "bot", content: "🎉 *Thank you for attending TechSummit2026!*", delay: 800 },
        { type: "bot", content: `It was amazing having you with us! Here are your *post-event resources*:`, delay: 1000 },
        { type: "bot-document", content: "📎 *Session Recordings — Day 1-3*\n📦 ZIP • 1.2 GB", docName: "Session Recordings", delay: 800 },
        { type: "bot-document", content: "📎 *Speaker Presentations*\n📦 PDF Bundle • 85 MB", docName: "Speaker Slides", delay: 600 },
        { type: "bot-media", content: "🎓 *Certificate of Attendance*\n\nCongratulations on completing TechSummit2026!\n\nThis certificate is issued to the registered attendee.", mediaType: "certificate", delay: 1000 },
        { type: "bot", content: "🔗 *Quick Links:*\n\n📸 Event Photos: _photos.techsummit2026.com_\n🎥 Full Recordings: _videos.techsummit2026.com_\n📋 Feedback Form: Type *feedback*\n\nSee you at TechSummit2027! 🚀", delay: 1000 },
    ];
}

export const FEATURES = [
    { id: "registration", label: "Event Registration", icon: "📝", getFlow: getRegistrationFlow },
    { id: "ticket", label: "Digital Ticket / E-Pass", icon: "🎫", getFlow: getTicketFlow },
    { id: "agenda", label: "Agenda / Schedule", icon: "📅", getFlow: getAgendaFlow },
    { id: "speakers", label: "Speaker Profiles", icon: "🎤", getFlow: getSpeakersFlow },
    { id: "reminders", label: "Session Reminders", icon: "⏰", getFlow: getReminderFlow },
    { id: "announcements", label: "Announcements", icon: "📢", getFlow: getAnnouncementFlow },
    { id: "faq", label: "FAQs & Information", icon: "❓", getFlow: getFAQFlow },
    { id: "venue", label: "Venue Map", icon: "🗺️", getFlow: getVenueMapFlow },
    { id: "documents", label: "Documents", icon: "📄", getFlow: getDocumentsFlow },
    { id: "exhibitors", label: "Exhibitor Directory", icon: "🏢", getFlow: getExhibitorsFlow },
    { id: "feedback", label: "Feedback & Surveys", icon: "📝", getFlow: getFeedbackFlow },
    { id: "language", label: "Multi-language", icon: "🌐", getFlow: getMultiLanguageFlow },
    { id: "emergency", label: "Emergency Alerts", icon: "🚨", getFlow: getEmergencyFlow },
    { id: "postevent", label: "Post-Event Content", icon: "🎉", getFlow: getPostEventFlow },
];
