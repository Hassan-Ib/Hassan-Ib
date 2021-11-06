import React from "react";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
    <footer>
      <div
        className={`${props.className} py-6 w-full bg-main dark:bg-main-dark`}>
        footer
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
