import { usePathname } from "next/navigation";

export const checkIfActivePage = (pageName: string) => {
  const pathname = usePathname();
  return pathname === pageName;
};
