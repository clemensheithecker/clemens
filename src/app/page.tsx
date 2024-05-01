import Link from "next/link";

const HomePage = () => (
  <>
    <p className="text-base font-semibold lg:text-lg">
      I am a software engineer passionate about building apps that empower
      people. At{" "}
      <a
        href="https://ledgy.com/"
        className="text- text-slate-500 hover:underline hover:underline-offset-2"
      >
        Ledgy
      </a>
      , I have architected and led projects that enable comprehensive end-to-end
      user stories for equity management.
    </p>
    <div className="flex flex-col gap-y-4">
      <h2 className="font-serif text-base font-semibold lg:text-lg">
        Experience
      </h2>
      <p className="text-sm font-normal lg:text-base">
        My key projects at{" "}
        <a
          href="https://ledgy.com/"
          className="text- text-slate-500 hover:underline hover:underline-offset-2"
        >
          Ledgy
        </a>{" "}
        have included:
      </p>
      <ul className="ml-6 flex list-outside list-disc flex-col gap-2">
        <li className="text-sm font-normal lg:text-base">
          Architecting and implementing a complete equity exercising process
          that supports document signing and payment functionalities for both
          administrators and stakeholders.
        </li>
        <li className="text-sm font-normal lg:text-base">
          Leading the development of custom fields for cap table management,
          satisfying unique information requirements for enterprise customers.
        </li>
        <li className="text-sm font-normal lg:text-base">
          Architecting and developing a UI component library to enable a
          consistent, maintainable, scalable and accessible user interface.
        </li>
      </ul>
      <p className="text-sm font-normal lg:text-base">
        Before transitioning into software engineering, I studied economics at{" "}
        <a
          href="https://www.tilburguniversity.edu/"
          className="text-slate-500 hover:underline hover:underline-offset-2"
        >
          Tilburg University
        </a>{" "}
        in the Netherlands, gaining experience in statistical modeling and data
        analysis.
      </p>
    </div>
  </>
);

export default HomePage;
