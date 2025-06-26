export default function BreadcrumbsIsland(props) {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="w-full max-w-[88.5rem] px-9">
        <div className="flex py-4 text-base font-medium text-black-500">
          <a href="/cursos">
            <span className="underline">
              {props.prefix}
            </span>
          </a>
          <span className="">&nbsp;/&nbsp;</span>

          <span className="font-bold">
            {props.pageName}
          </span>
        </div>
      </div>
    </div>
  );
}
