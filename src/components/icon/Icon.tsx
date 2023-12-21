import React, { useEffect, useState } from "react";
import { IconVariant, iconComponentNameMap } from "./icon-list";

type IconProps = {
  icon: IconVariant;
  className?: string;
};

export const Icon = ({ className, icon }: IconProps) => {
  const [importedComponent, setImportedComponent] = useState<any>(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(
        `../assets/icons/${iconComponentNameMap[icon]}`
      );
      const AnotherComponent = module.default;
      setImportedComponent(<AnotherComponent className={className} />);
    };

    importComponent();
  }, []);

  return importedComponent;
};
