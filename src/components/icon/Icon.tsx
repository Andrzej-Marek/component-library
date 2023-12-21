import React, { Suspense, useEffect, useState } from "react";
import { IconVariant, iconComponentNameMap } from "./icon-list";
import loadable from "@loadable/component";

type IconProps = {
  icon: IconVariant;
  className?: string;
};

export const Icon = ({ className, icon }: IconProps) => {
  const Check = loadable(
    () => import(`../../icons/${iconComponentNameMap[icon]}`)
  );

  return (
    <Suspense fallback="...">
      <Check className={className} />
    </Suspense>
  );
};
