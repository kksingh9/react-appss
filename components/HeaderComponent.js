import { Calendar } from "lucide-react";
const HeaderComponent = () => {
  return (
    <>
      <div>
        <div className="p-4 flex justify-between  ">
          <div>
            <h1 className="font-bold text-3xl">Hello, Margaret</h1>
            <p className="text-[grey]">Track team progress</p>
          </div>

          <div className="flex gap-2 w-[180px]">
            <span>16 May, 2023 </span>

            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
