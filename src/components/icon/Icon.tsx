import React, { useEffect, useState } from "react";
import { IconVariant } from "./icon-list";

type IconProps = {
  icon: IconVariant;
  className?: string;
};

export const Icon = ({ className, icon }: IconProps) => {
  const [importedComponent, setImportedComponent] = useState<any>(null);

  useEffect(() => {
    // PROBLEM WITH COMPONENT IMPORT
    const importComponent = async () => {
      const module = await import(`../assets/icons/${icon}.svg`);
      const AnotherComponent = module.default;
      setImportedComponent(<AnotherComponent className={className} />);
    };

    importComponent();
  }, []);

  return importedComponent;
};
