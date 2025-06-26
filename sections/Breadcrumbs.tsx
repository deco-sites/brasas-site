import BreadcrumbsIsland from "site/islands/BreadcrumbsIsland.tsx";

interface BreadcrumbsProps {
  prefix: string;
  pageName: string;
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return <BreadcrumbsIsland {...props} />;
}
