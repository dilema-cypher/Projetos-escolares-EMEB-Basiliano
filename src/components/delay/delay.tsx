"use client";

import { useEffect, useState } from "react";
import Spinner from "../spinner/spinning";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function Delay({ children }: Props) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShow(false);

    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return show ? (
    children
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      {/* spinner responsivo */}
      <div
        className="
        w-16 h-16         /* tamanho padrão */
        md:w-12 md:h-12   /* menor em telas médias */
        lg:w-10 lg:h-10   /* ainda menor em telas grandes */
        xl:w-8  xl:h-8    /* menorzona em telas muito grandes */
      "
      >
        <Spinner />
      </div>
    </div>
  );
}
