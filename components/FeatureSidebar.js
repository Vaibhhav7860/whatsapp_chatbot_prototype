"use client";
import styles from "./FeatureSidebar.module.css";
import { FEATURES } from "@/data/flows";
import { RotateCcw } from "lucide-react";

export default function FeatureSidebar({ activeFeature, onSelect, onReset, isMobileOpen, onClose }) {
    return (
        <>
            {isMobileOpen && <div className={styles.overlay} onClick={onClose} />}
            <aside className={`${styles.sidebar} ${isMobileOpen ? styles.open : ""}`}>
                <div className={styles.brandHeader}>
                    <div className={styles.brandLogo}>🚀</div>
                    <div className={styles.brandInfo}>
                        <h1 className={styles.brandName}>TechSummit2026</h1>
                        <p className={styles.brandTagline}>Where Innovation Meets Impact</p>
                    </div>
                </div>

                <div className={styles.eventMeta}>
                    <span>📅 Mar 15 – 17, 2026</span>
                    <span>📍 Pragati Maidan, Delhi</span>
                </div>

                <div className={styles.sectionLabel}>Chatbot Features</div>

                <nav className={styles.featureList}>
                    {FEATURES.map((feature) => (
                        <button
                            key={feature.id}
                            className={`${styles.featureCard} ${activeFeature === feature.id ? styles.active : ""}`}
                            onClick={() => { onSelect(feature); if (isMobileOpen) onClose(); }}
                        >
                            <span className={styles.featureIcon}>{feature.icon}</span>
                            <span className={styles.featureLabel}>{feature.label}</span>
                            {activeFeature === feature.id && <span className={styles.activeDot} />}
                        </button>
                    ))}
                </nav>

                <div className={styles.footer}>
                    <button className={styles.resetBtn} onClick={onReset}>
                        <RotateCcw size={14} />
                        Reset Chat
                    </button>
                    <p className={styles.credit}>Prototype Demo • Not a real chatbot</p>
                </div>
            </aside>
        </>
    );
}
