import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import React from "react";

interface linkProps {
  href: string;
  label: string;
}

interface DropdownProps {
  label: string;
  links: Array<linkProps>;
}

export const Dropdown = ({
  label = "DefaultDropdown",
  links,
}: DropdownProps) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 by-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            {label}
          </Menu.Button>

          <Transition
            show={open}
            enter="transform transition duration-100 ease-in"
            enterFrom="opacity-0 scale-95"
            enterTo="opcity-100 scale-100"
            leave="transform transition duration-75 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="" static>
              {links.map((link) => (
                <>
                  <div className="py-1">
                    <Menu.Item key={link.href} as={Fragment}>
                      {({ active, disabled }) => (
                        <a
                          href={link.href}
                          className={`flex items-center px-4 py-2 text-sm
							 ${
                 disabled
                   ? "text-grey-300"
                   : active
                   ? "bg-indigo-500 text-white"
                   : "text-gray-700"
               }`}
                        >
                          {link.label}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
