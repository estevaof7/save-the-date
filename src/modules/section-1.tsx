import Image from "next/image";

export const Section1 = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className="w-4/5 justify-between"
        style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr", height: "80%" }}
      >
        <div className="flex w-full justify-center">
          <div style={{ width: "70%", height: "auto" }}>
            <Image
              src="/img/titles/SAVE-THE-DATE.png"
              alt="Save the date title"
              width={1466}
              height={448}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            src="/img/titles/FRASE1.png"
            alt="Save the date title"
            width={2389}
            height={722}
            className="object-contain"
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <div style={{ width: "40%", height: "auto" }}>
            <Image
              src="/img/titles/CASAR.png"
              alt="Save the date title"
              width={854}
              height={471}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
