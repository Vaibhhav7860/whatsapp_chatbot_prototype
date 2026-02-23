"use client";
import { useState, useCallback, useRef, useEffect } from "react";

export function useChatFlow() {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [waitingForInput, setWaitingForInput] = useState(null);
    const [currentFlow, setCurrentFlow] = useState(null);
    const flowQueue = useRef([]);
    const timeoutRef = useRef(null);

    const clearChat = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        flowQueue.current = [];
        setMessages([]);
        setIsTyping(false);
        setWaitingForInput(null);
        setCurrentFlow(null);
    }, []);

    const addMessage = useCallback((msg) => {
        setMessages((prev) => [...prev, { ...msg, id: Date.now() + Math.random(), timestamp: new Date() }]);
    }, []);

    const processQueue = useCallback(() => {
        if (flowQueue.current.length === 0) {
            setIsTyping(false);
            return;
        }

        const nextStep = flowQueue.current.shift();

        if (nextStep.type === "bot" || nextStep.type === "bot-media" || nextStep.type === "bot-location" || nextStep.type === "bot-document") {
            setIsTyping(true);
            timeoutRef.current = setTimeout(() => {
                setIsTyping(false);
                addMessage({ sender: "bot", ...nextStep });
                if (nextStep.buttons || nextStep.listItems) {
                    setWaitingForInput({ type: nextStep.buttons ? "buttons" : "list", options: nextStep.buttons || nextStep.listItems, onSelect: nextStep.onSelect });
                } else {
                    timeoutRef.current = setTimeout(() => processQueue(), 400);
                }
            }, nextStep.delay || 1200);
        } else if (nextStep.type === "input") {
            setWaitingForInput({ type: "text", placeholder: nextStep.placeholder || "Type your answer...", onSubmit: nextStep.onSubmit, field: nextStep.field });
        } else if (nextStep.type === "rating") {
            setWaitingForInput({ type: "rating", max: nextStep.max || 5, onSelect: nextStep.onSelect });
        }
    }, [addMessage]);

    const startFlow = useCallback((flowSteps, flowName) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        flowQueue.current = [];
        setMessages([]);
        setIsTyping(false);
        setWaitingForInput(null);
        setCurrentFlow(flowName);

        flowQueue.current = [...flowSteps];
        processQueue();
    }, [processQueue]);

    const handleUserInput = useCallback((text) => {
        addMessage({ sender: "user", type: "user", content: text });
        setWaitingForInput(null);
        setTimeout(() => processQueue(), 300);
    }, [addMessage, processQueue]);

    const handleButtonSelect = useCallback((option, callback) => {
        addMessage({ sender: "user", type: "user", content: option.label || option });
        setWaitingForInput(null);
        if (callback) {
            const newSteps = callback(option);
            if (newSteps && newSteps.length > 0) {
                flowQueue.current = [...newSteps, ...flowQueue.current];
            }
        }
        setTimeout(() => processQueue(), 300);
    }, [addMessage, processQueue]);

    const handleRatingSelect = useCallback((rating, callback) => {
        addMessage({ sender: "user", type: "user", content: `${"⭐".repeat(rating)} (${rating}/5)` });
        setWaitingForInput(null);
        if (callback) {
            const newSteps = callback(rating);
            if (newSteps && newSteps.length > 0) {
                flowQueue.current = [...newSteps, ...flowQueue.current];
            }
        }
        setTimeout(() => processQueue(), 300);
    }, [addMessage, processQueue]);

    const enqueueSteps = useCallback((steps) => {
        flowQueue.current = [...steps, ...flowQueue.current];
        if (!isTyping && !waitingForInput) {
            processQueue();
        }
    }, [isTyping, waitingForInput, processQueue]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return {
        messages,
        isTyping,
        waitingForInput,
        currentFlow,
        startFlow,
        clearChat,
        handleUserInput,
        handleButtonSelect,
        handleRatingSelect,
        enqueueSteps,
    };
}
