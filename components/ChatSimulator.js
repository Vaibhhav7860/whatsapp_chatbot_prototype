"use client";
import { useRef, useEffect } from "react";
import styles from "./ChatSimulator.module.css";
import { Phone, Video, MoreVertical, Menu } from "lucide-react";

function formatText(text) {
    if (!text) return "";
    return text
        .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
        .replace(/_(.*?)_/g, "<em>$1</em>")
        .replace(/\n/g, "<br/>");
}

function formatTime(date) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
}

function TypingIndicator() {
    return (
        <div className={styles.typingBubble}>
            <span className={styles.dot} style={{ animationDelay: "0ms" }} />
            <span className={styles.dot} style={{ animationDelay: "150ms" }} />
            <span className={styles.dot} style={{ animationDelay: "300ms" }} />
        </div>
    );
}

function MessageBubble({ msg }) {
    const isUser = msg.sender === "user";
    const isEmergency = msg.content && msg.content.includes("EMERGENCY");

    return (
        <div className={`${styles.msgRow} ${isUser ? styles.msgRight : styles.msgLeft}`}>
            <div className={`${styles.bubble} ${isUser ? styles.bubbleUser : styles.bubbleBot} ${isEmergency ? styles.bubbleEmergency : ""}`}>
                {msg.mediaType === "ticket" && <TicketCard />}
                {msg.mediaType === "speaker" && <SpeakerCard name={msg.speakerName} />}
                {msg.mediaType === "map" && <MapCard />}
                {msg.mediaType === "certificate" && <CertificateCard />}
                {msg.type === "bot-document" && <DocumentCard name={msg.docName} />}
                {msg.type === "bot-location" && <LocationCard lat={msg.lat} lng={msg.lng} />}
                <div className={styles.msgText} dangerouslySetInnerHTML={{ __html: formatText(msg.content) }} />
                <span className={styles.msgTime}>
                    {formatTime(msg.timestamp)}
                    {isUser && <span className={styles.ticks}>✓✓</span>}
                </span>
            </div>
        </div>
    );
}

function TicketCard() {
    return (
        <div className={styles.mediaCard} style={{ background: "linear-gradient(135deg, #0D0D1A 0%, #1C1C36 100%)" }}>
            <div className={styles.ticketHeader}>
                <span className={styles.ticketLogo}>🚀</span>
                <div>
                    <div className={styles.ticketTitle}>TechSummit2026</div>
                    <div className={styles.ticketSub}>E-PASS • Attendee</div>
                </div>
            </div>
            <div className={styles.qrPlaceholder}>
                <div className={styles.qrGrid}>
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={styles.qrCell} style={{ opacity: Math.random() > 0.4 ? 1 : 0.15 }} />
                    ))}
                </div>
            </div>
            <div className={styles.ticketId}>TS2026-4829</div>
        </div>
    );
}

function SpeakerCard({ name }) {
    const initials = (name || "TS").split(" ").map(w => w[0]).join("").slice(0, 2);
    return (
        <div className={styles.mediaCard} style={{ background: "linear-gradient(135deg, #128C7E 0%, #075E54 100%)" }}>
            <div className={styles.speakerAvatar}>{initials}</div>
        </div>
    );
}

function MapCard() {
    return (
        <div className={styles.mediaCard} style={{ background: "linear-gradient(135deg, #1a5632 0%, #0d3320 100%)", height: 160 }}>
            <div className={styles.mapGrid}>
                <div className={styles.mapPin}>📍</div>
                <div className={styles.mapLabel}>Pragati Maidan</div>
            </div>
        </div>
    );
}

function CertificateCard() {
    return (
        <div className={styles.mediaCard} style={{ background: "linear-gradient(135deg, #1C1C36 0%, #0D0D1A 100%)", border: "2px solid var(--brand-gold)" }}>
            <div className={styles.certContent}>
                <div style={{ fontSize: 32 }}>🎓</div>
                <div className={styles.certTitle}>Certificate of Attendance</div>
                <div className={styles.certEvent}>TechSummit2026</div>
            </div>
        </div>
    );
}

function DocumentCard({ name }) {
    return (
        <div className={styles.docCard}>
            <div className={styles.docIcon}>📄</div>
            <div className={styles.docInfo}>
                <div className={styles.docName}>{name || "Document"}</div>
                <div className={styles.docSize}>PDF • 2.4 MB</div>
            </div>
            <div className={styles.docDownload}>⬇️</div>
        </div>
    );
}

function LocationCard() {
    return (
        <div className={styles.locationCard}>
            <div className={styles.locationMap}>
                <span style={{ fontSize: 28 }}>📍</span>
                <span style={{ fontSize: 12, color: "var(--wa-text-secondary)" }}>Pragati Maidan, New Delhi</span>
            </div>
        </div>
    );
}

function QuickButtons({ options, onSelect }) {
    return (
        <div className={styles.quickButtons}>
            {options.map((opt, i) => (
                <button key={i} className={styles.quickBtn} onClick={() => onSelect(opt)}>
                    {opt.label || opt}
                </button>
            ))}
        </div>
    );
}

function RatingInput({ max, onSelect }) {
    return (
        <div className={styles.ratingRow}>
            {Array.from({ length: max }).map((_, i) => (
                <button key={i} className={styles.ratingBtn} onClick={() => onSelect(i + 1)}>
                    {i + 1} ⭐
                </button>
            ))}
        </div>
    );
}

function ChatInput({ placeholder, onSubmit }) {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const val = inputRef.current?.value?.trim();
        if (val) {
            onSubmit(val);
            inputRef.current.value = "";
        }
    };
    useEffect(() => { inputRef.current?.focus(); }, []);

    return (
        <form className={styles.inputBar} onSubmit={handleSubmit}>
            <input ref={inputRef} className={styles.inputField} placeholder={placeholder || "Type a message"} autoFocus />
            <button type="submit" className={styles.sendBtn}>▶</button>
        </form>
    );
}

export default function ChatSimulator({ messages, isTyping, waitingForInput, onUserInput, onButtonSelect, onRatingSelect, onMenuToggle, activeFeature }) {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const showWelcome = !activeFeature && messages.length === 0;

    return (
        <div className={styles.chatContainer}>
            {/* Header */}
            <div className={styles.header}>
                <button className={styles.menuBtn} onClick={onMenuToggle} aria-label="Open menu">
                    <Menu size={20} />
                </button>
                <div className={styles.avatar}>🚀</div>
                <div className={styles.headerInfo}>
                    <div className={styles.headerName}>TechSummit2026 Bot</div>
                    <div className={styles.headerStatus}>{isTyping ? "typing..." : "online"}</div>
                </div>
                <div className={styles.headerActions}>
                    <Phone size={18} />
                    <Video size={18} />
                    <MoreVertical size={18} />
                </div>
            </div>

            {/* Messages */}
            <div className={styles.messagesArea} ref={scrollRef}>
                <div className={styles.dateChip}>Today</div>
                <div className={styles.e2eNotice}>🔒 Messages to this chat and calls are secured with end-to-end encryption.</div>

                {showWelcome && (
                    <div className={styles.welcomeState}>
                        <div className={styles.welcomeIcon}>💬</div>
                        <h2 className={styles.welcomeTitle}>WhatsApp Event Chatbot</h2>
                        <p className={styles.welcomeText}>Select a feature from the sidebar to see the chatbot in action.</p>
                        <p className={styles.welcomeHint}>← Tap the menu icon on mobile</p>
                    </div>
                )}

                {messages.map((msg) => (
                    <MessageBubble key={msg.id} msg={msg} />
                ))}

                {isTyping && (
                    <div className={`${styles.msgRow} ${styles.msgLeft}`}>
                        <TypingIndicator />
                    </div>
                )}

                {waitingForInput?.type === "buttons" && (
                    <QuickButtons options={waitingForInput.options} onSelect={(opt) => onButtonSelect(opt, waitingForInput.onSelect)} />
                )}

                {waitingForInput?.type === "rating" && (
                    <RatingInput max={waitingForInput.max} onSelect={(r) => onRatingSelect(r, waitingForInput.onSelect)} />
                )}
            </div>

            {/* Input */}
            {waitingForInput?.type === "text" ? (
                <ChatInput placeholder={waitingForInput.placeholder} onSubmit={onUserInput} />
            ) : (
                <div className={styles.inputBar}>
                    <input className={styles.inputField} placeholder="Select a feature to start..." disabled />
                    <span className={styles.micIcon}>🎤</span>
                </div>
            )}
        </div>
    );
}
