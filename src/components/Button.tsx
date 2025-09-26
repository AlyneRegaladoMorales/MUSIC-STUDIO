 import React, { type FC } from 'react'
 interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
 }

 const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
   return (
     <div>
       <button onClick={onClick} className={`px-10 py-2 text-base font-semibold bg-neonYellow text-dark rounded-full hover:bg-neonYellow/90 transition ${className}`}>
         {children}
       </button>
     </div>
   )
 }

 export default Button
       
     

 