import React, { ReactNode, lazy, useEffect, useState } from "react";
import { Suspense } from "react";
import { IconVariant, icons } from "./icon-list";

type IconProps = {
  icon: IconVariant;
  className?: string;
};

const importIcon = (icon: IconVariant) =>
  lazy(() =>
    import(`../../icons/${icons[icon]}`).catch(
      () => import(`../../icons/academic-cap`)
    )
  );

const Icon = ({ className, icon }: IconProps) => {
  const [currentIcon, setCurrentIcon] = useState<ReactNode>();

  useEffect(() => {
    async function loadIcon() {
      const ImportedIcon = await importIcon(icon);
      setCurrentIcon(<ImportedIcon className={className} />);
    }

    loadIcon();
  }, [icon, className]);

  return <Suspense>{currentIcon}</Suspense>;
};

export default Icon;
