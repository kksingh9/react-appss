"use client";

import { useEffect, useState } from "react";
import React from "react";

const EmojiPickerWrapper = ({ onSelect }) => {
  const [PickerElement, setPickerElement] = useState(null);

  useEffect(() => {
    let Picker, emojiData;

    const loadPicker = async () => {
      const mod = await import("emoji-mart");
      Picker = mod.Picker;

      const dataModule = await import("@emoji-mart/data");
      emojiData = dataModule.default;
      // ✅ Create element with React.createElement instead of JSX
      const picker = React.createElement(Picker, {
        data: emojiData,
        onEmojiSelect: onSelect,
        theme: "light",
      });

      setPickerElement(picker);
    };

    loadPicker();
  }, [onSelect]);

  return PickerElement;
};

export default EmojiPickerWrapper;
