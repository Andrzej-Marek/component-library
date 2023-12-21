import React, { useEffect, useState } from "react";
import { IconVariant, iconComponentNameMap } from "./icon-list";
import Check from "../../assets/icons/check.svg";

type IconProps = {
  icon: IconVariant;
  className?: string;
};

export const Icon = ({ className, icon }: IconProps) => {
  const [importedComponent, setImportedComponent] = useState<any>(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`../../icons/${iconComponentNameMap[icon]}`);
      const AnotherComponent = module.default;
      setImportedComponent(<AnotherComponent className={className} />);
    };

    importComponent();
  }, []);

  return importedComponent;
};
