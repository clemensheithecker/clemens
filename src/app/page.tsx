export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-24 sm:px-10 sm:py-28 md:px-24">
      <div className="flex w-full max-w-xl flex-col gap-y-16">
        <h1 className="text-sm font-normal lg:text-base">
          <strong className="font-serif text-lg font-bold lg:text-xl">
            Clemens Heithecker
          </strong>
          <br />
          Software Engineer
        </h1>
        <p className="text-base font-semibold lg:text-lg">
          I am a software engineer passionate about building apps that empower
          people. At{" "}
          <a
            href="https://ledgy.com/"
            className="underline underline-offset-2 hover:text-neutral-500"
          >
            Ledgy
          </a>
          , I have architected and led projects that enable comprehensive
          end-to-end user stories for equity management.
        </p>
        <div className="flex flex-col gap-y-4">
          <h2 className="font-serif text-base font-semibold lg:text-lg">
            Experience
          </h2>
          <p className="text-sm font-normal lg:text-base">
            My key projects at{" "}
            <a
              href="https://ledgy.com/"
              className="underline underline-offset-2 hover:text-neutral-500"
            >
              Ledgy
            </a>{" "}
            have included:
          </p>
          <ul className="ml-6 flex list-outside list-disc flex-col gap-2">
            <li className="text-sm font-normal lg:text-base">
              Architecting and implementing a complete equity exercising process
              that supports document signing and payment functionalities for
              both administrators and stakeholders.
            </li>
            <li className="text-sm font-normal lg:text-base">
              Leading the development of custom fields for cap table management,
              satisfying unique information requirements for enterprise
              customers.
            </li>
            <li className="text-sm font-normal lg:text-base">
              Architecting and developing a UI component library to enable a
              consistent, maintainable, scalable and accessible user interface.
            </li>
          </ul>
          <p className="text-sm font-normal lg:text-base">
            Before transitioning into software engineering, I studied economics
            at{" "}
            <a
              href="https://www.tilburguniversity.edu/"
              className="underline underline-offset-2 hover:text-neutral-500"
            >
              Tilburg University
            </a>{" "}
            in the Netherlands, gaining experience in statistical modeling and
            data analysis.
          </p>
        </div>
        <div className="flex justify-center gap-x-10">
          <a
            href="https://www.linkedin.com/in/clemensheithecker/"
            className="flex items-center space-x-2 text-sm lg:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="h-5 text-[#0072b1]"
              aria-hidden="true"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.github.com/clemensheithecker/"
            className="flex items-center space-x-2 text-sm lg:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              fill="currentColor"
              className="h-5 text-[#171515]"
              aria-hidden="true"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}
