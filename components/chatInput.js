"use client";
import { useEffect, useState } from "react";
import { PaperclipIcon, SmileIcon, MicIcon } from "lucide-react";
import Input from "../components/Input/inputComponent";
import Button from "./Button/Button";
// import dynamic from 'next/dynamic';
// import { Picker } from 'emoji-mart';
// import data from '@emoji-mart/data';
import dynamic from "next/dynamic";

// 👇 Dynamic import of EmojiPickerWrapper (ssr: false to fix class constructor issue)
const EmojiPicker = dynamic(() => import("./EmojiWrapper/EmojiWrapper"), {
  ssr: false,
});

const ChatInputBar = () => {
  const [datas, setDatas] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const handleInput = (e) => setDatas(e.target.value);

  const handleSubmit = () => {
    if (datas.trim() === "") return;
    console.log("Message submitted:", datas);
    setDatas("");
  };

  useEffect(() => {
    if (datas) {
      console.log(datas, "ffs");
    }
  }, [datas]);

  const MediaUpload = (e) => {
    let data = e.target.files[0];
    const formData = new FormData();
    formData.append("file", data);
    console.log([...formData]); // logs entries in readable format
    // Or: for (let pair of formData.entries()) console.log(pair);

    // Optionally: Upload via fetch or axios
    // fetch('/your-endpoint', {
    //   method: 'POST',
    //   body: formData,
    // }).then(res => res.json()).then(console.log);
    // try {
    //   const response = await axios.post('/your-upload-endpoint', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });

    //   console.log("Upload successful:", response.data);
    // } catch (error) {
    //   console.error("Upload failed:", error);
    // }
  };

  const handleClick = () => {
    setShowPicker(!showPicker);
  };
  const addEmoji = (emoji) => {
    setDatas((prev) => prev + emoji.native); // emoji.native is the actual character
  };

  return (
    <div className="flex items-center justify-between w-[95%] mx-auto rounded-full bg-gray-100 px-4 py-2">
      <div className="flex items-center gap-2 flex-grow">
        <label htmlFor="id1">
          <input id="id1" type="file" hidden onChange={MediaUpload} />
          <PaperclipIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        </label>
        <Input
          type="text"
          value={datas}
          handleInput={handleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="Write a message"
          className="bg-transparent outline-none text-gray-600 text-sm flex-grow"
        />
      </div>

      <div className="flex items-center gap-3 pl-2 relative">
        <Button
          text={<SmileIcon className="w-5 h-5 text-gray-500 " />}
        
        />
        {showPicker && (
          <div className="absolute bottom-10 z-50">
            <EmojiPicker
              onSelect={(emoji) => {
                console.log("Selected Emoji:", emoji.native); // Use emoji.native
                //setDatas(prev => prev + emoji.native); // Add emoji to input
              }}
            />
          </div>
        )}
        <MicIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatInputBar;
