"use client";
import { useState } from "react";
import FeatureSidebar from "@/components/FeatureSidebar";
import ChatSimulator from "@/components/ChatSimulator";
import { useChatFlow } from "@/hooks/useChatFlow";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    messages,
    isTyping,
    waitingForInput,
    startFlow,
    clearChat,
    handleUserInput,
    handleButtonSelect,
    handleRatingSelect,
  } = useChatFlow();

  const handleFeatureSelect = (feature) => {
    setActiveFeature(feature.id);
    const flowSteps = feature.getFlow();
    startFlow(flowSteps, feature.id);
  };

  const handleReset = () => {
    setActiveFeature(null);
    clearChat();
  };

  return (
    <div className="app-container">
      <FeatureSidebar
        activeFeature={activeFeature}
        onSelect={handleFeatureSelect}
        onReset={handleReset}
        isMobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <ChatSimulator
        messages={messages}
        isTyping={isTyping}
        waitingForInput={waitingForInput}
        onUserInput={handleUserInput}
        onButtonSelect={handleButtonSelect}
        onRatingSelect={handleRatingSelect}
        onMenuToggle={() => setSidebarOpen(true)}
        activeFeature={activeFeature}
      />
    </div>
  );
}
