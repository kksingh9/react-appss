import {
  PhoneCallIcon,
  VideoIcon,
  MoreVerticalIcon,
  ImageIcon,
} from "lucide-react";
import Button from "./Button/Button";

const RightHeader = () => {
  return (
    <div className="m-2 flex flex-col items-center w-[97%] bg-[#f2f2f2] p-6 rounded-2xl">
      {/* Avatar */}
      <div className="relative">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-amber-200 flex items-center justify-center">
          {/* Replace with real image if available */}
          <ImageIcon className="w-10 h-10 text-white" />
        </div>
        {/* Red Status Dot */}
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Name */}
      <div className="mt-4 text-center">
        <div className="text-lg font-semibold text-gray-900">Megan Norton</div>
        <div className="text-sm text-gray-500">@megnorton</div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <Button
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center"
          text={<PhoneCallIcon className="text-gray-700" />}
        />

        <Button
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center"
          text={<VideoIcon className="text-gray-700" />}
        />

        <Button
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center"
          text={<MoreVerticalIcon className="text-gray-700" />}
        />
      </div>
    </div>
  );
};

export default RightHeader;
