import React, { FC } from "react";

import { LAYOUT_STYLES } from "../../../../constants";

const STYLES = LAYOUT_STYLES;

export const HeaderTop: FC = (): JSX.Element => {
     return (
          <header className="border-b border-slate-100 bg-white py-4 sm:py-5 w-full">
               <div className="container mx-auto w-full px-5 sm:px-10">
                    <div className="flex items-center sm:justify-normal justify-center w-full">
                         <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-0 sm:gap-x-5 sm:gap-y-0 gap-y-2.5">
                              <div className={STYLES.TEXT}>Phone: +91 95112 20201</div>
                              <div className={STYLES.TEXT}>Email: jaisaipadyatrimitramandal2k22@gmail.com</div>
                         </div>
                    </div>
               </div>
          </header>
     );
};
