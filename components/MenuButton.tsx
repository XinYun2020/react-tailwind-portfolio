export interface MenuButtonProps {
  name?: String;
  type?: "menu" | "defaut";
  path?: String;
  newFeature?: boolean;
  betaFeature?: boolean;
  disabled?: boolean;
  onClick?(): void;
}

export const MenuButton = ({
  name = "MenuButton",
  path = "",
  newFeature = false,
  betaFeature = false,
  disabled = false,
  ...props
}: MenuButtonProps) => {
  return (
    <span
      className={` flex flew-row button flex-1
          px-4 py-3 
          rounded-md
          border border-gray-border   
        bg-white hover:bg-gray-primary 
          ${disabled ? "disabled" : ""}
        `}
    >
      <p
        className="flex flew-row m-auto gap-2
        text-gray-font text-md text-center font-normal
        "
      >
        {name}
        {props.children}
        {newFeature ? (
          <>
            <span
              className="bg-green-badge rounded-full overflow-hidden
              px-2.5 py-1 
             dark:bg-green-200 dark:text-green-badge"
            >
              <p className="my-auto text-center text-white text-xs font-semibold">
                New
              </p>
            </span>
          </>
        ) : (
          ""
        )}
        {betaFeature ? (
          <>
            <span
              className="bg-indigo-600 rounded-full
              px-2.5 py-1
             dark:bg-indigo-200 dark:bg-indigo-600"
            >
              <p className="my-auto text-center text-white text-xs font-semibold">
                Beta
              </p>
            </span>
          </>
        ) : (
          ""
        )}
      </p>
    </span>
  );
};
