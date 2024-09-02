import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        src={"../public/Rectangle 1.svg"}
        alt="logo"
        width="42"
        height="42"
        style={{
          backgroundColor: "white",
        }}
      />
    </>
  );
};
