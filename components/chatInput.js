'use client';
import { useState } from "react";
import { PaperclipIcon, SmileIcon, MicIcon } from "lucide-react";
import Input from "../components/Input/inputComponent";

const ChatInputBar = () => {
    const [data, setData] = useState("");
    const handleInput = (e) => {
      setData(e.target.value);
    };
  return (
    <div className="flex items-center justify-between w-[95%] mx-auto rounded-full bg-gray-100 px-4 py-2">
      {/* Left side: Paperclip + Input */}
      <div className="flex items-center gap-2 flex-grow">
        <PaperclipIcon className="w-5 h-5 text-gray-500" />
        <Input
          type="text"
          value={data}
          onChange={handleInput}
          placeholder="Write a message"
          className="bg-transparent outline-none text-gray-600 text-sm flex-grow"
        />
      </div>

      {/* Right side: Emoji + Mic */}
      <div className="flex items-center gap-3 pl-2">
        <SmileIcon className="w-5 h-5 text-gray-500" />
        <MicIcon className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export default ChatInputBar;