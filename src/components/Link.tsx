import type { FC } from "react";

interface LinkProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Link: FC<LinkProps> = ({ href, onClick, children }) => {
  return (
    <div>
      <a
        href={href}
        onClick={onClick}
        className="hover:text-neonYellow transition"
      >
        {children}
      </a>
    </div>
  );
};

export default Link;
