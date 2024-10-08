export default function SpeakerBox({
  speakerName,
  speakerInfo,
  color = "Green",
}: {
  speakerName: string;
  speakerInfo: string;
  color?: string;
}) {
  let gradientClass = "bg-gradient-to-b from-green-500 to-black";

  if (color === "Pink") {
    gradientClass = "bg-gradient-to-b from-pink-500 to-black";
  } else if (color === "Purple") {
    gradientClass = "bg-gradient-to-b from-purple-500 to-black";
  }

  return (
    <div className={`h-40 ${gradientClass}`}>
      <div className="mt-5 text-2xl font-bold text-center">{speakerName}</div>
      <div className="mt-10 text-xl font-md text-center">{speakerInfo}</div>
    </div>
  );
}
