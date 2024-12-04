export const Links = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-[60px]">
      <div>
        <p className="text-lg sm:text-xl text-secondary-500 font-semibold leading-6 sm:leading-[30px] tracking-[-0.4px] mb-6 sm:mb-10">
          About
        </p>
        <ul className="flex flex-col gap-y-4 sm:gap-y-6">
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            How it works
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Featured
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Partnership
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Business Relation
          </li>
        </ul>
      </div>

      <div>
        <p className="text-lg sm:text-xl text-secondary-500 font-semibold leading-6 sm:leading-[30px] tracking-[-0.4px] mb-6 sm:mb-10">
          Community
        </p>
        <ul className="flex flex-col gap-y-4 sm:gap-y-6">
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Events
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Blog
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Podcast
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Invite a friend
          </li>
        </ul>
      </div>

      <div>
        <p className="text-lg sm:text-xl text-secondary-500 font-semibold leading-6 sm:leading-[30px] tracking-[-0.4px] mb-6 sm:mb-10">
          Socials
        </p>
        <ul className="flex flex-col gap-y-4 sm:gap-y-6">
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Discord
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Instagram
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Twitter
          </li>
          <li className="text-sm sm:text-base text-footer leading-5 sm:leading-[24px] tracking-[-0.32px] opacity-60 hover:text-primary hover:opacity-100 cursor-pointer">
            Facebook
          </li>
        </ul>
      </div>
    </div>
  );
};
