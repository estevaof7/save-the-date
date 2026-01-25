import Image from "next/image";

export const Section1 = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid h-[80%] w-4/5 max-w-[700px] grid-rows-[1fr_1fr_1fr] md:h-[90%]">
        <div className="flex w-full justify-center">
          <div className="h-auto w-[70%] md:flex md:items-center">
            <Image
              src="/img/titles/SAVE-THE-DATE.png"
              alt="Save the date title"
              width={1466}
              height={448}
              className="title-image object-contain"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:items-start">
          <Image
            src="/img/titles/FRASE1.png"
            alt="Save the date title"
            width={2389}
            height={722}
            className="title-image object-contain"
          />
        </div>
        <div className="md:itmes-end flex w-full items-center justify-center">
          <div className="h-auto w-[40%]">
            <Image
              src="/img/titles/CASAR.png"
              alt="Save the date title"
              width={854}
              height={471}
              className="title-image object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
