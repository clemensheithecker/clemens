import Image from "next/image";

const PersonalPage = () => (
  <>
    <p className="text-base font-semibold lg:text-lg">
      Besides planning and writing code, I ride and jump with horses.
    </p>
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </>
);

export default PersonalPage;
