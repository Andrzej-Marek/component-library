import React, { useEffect, useState } from "react";
import { IconVariant } from "./icon-list";

type IconProps = {
  icon: IconVariant;
  className?: string;
};

export const Icon = ({ className, icon }: IconProps) => {
  const [importedComponent, setImportedComponent] = useState<any>(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`../../assets/icons/${icon}.svg?react`);
      const AnotherComponent = module.default;
      setImportedComponent(<AnotherComponent className={className} />);
    };

    importComponent();
  }, []);

  return importedComponent;
};
