import { RiErrorWarningFill } from "react-icons/ri";

export default function InputMsg({ msg }) {
  return (
    <div className="bg-oxfordBlue p-3 flex justify-between space-x-2 items-center rounded-lg mt-2">
      <p className="text-madderLake text-xs">{msg}</p>
      <RiErrorWarningFill color="red" size={20} />
    </div>
  );
}
