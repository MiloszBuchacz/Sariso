import { usePathname } from "next/navigation";

export function useIsActive(pageName: string) {
  const pathname = usePathname();

  console.log(pageName, pageName);
  return pathname === pageName;
}
