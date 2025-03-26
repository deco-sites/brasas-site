import BreadcrumbsIsland from "site/islands/BreadcrumbsIsland.tsx";

interface BreadcrumbsProps {
  pageNameInEnglish: string;
  pageNameInPortuguese: string;
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return <BreadcrumbsIsland {...props} />;
}
