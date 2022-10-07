import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

interface DropdownRadixProps {
  children: string;
}
export function DropdownRadix({ ...props }) {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger />

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Label />
            <DropdownMenu.Item>{props.children}</DropdownMenu.Item>

            <DropdownMenu.Group>
              <DropdownMenu.Item />
            </DropdownMenu.Group>

            <DropdownMenu.CheckboxItem>
              <DropdownMenu.ItemIndicator />
            </DropdownMenu.CheckboxItem>
            {/* 
            <DropdownMenu.RadioGroup>
              <DropdownMenu.RadioItem>
                <DropdownMenu.ItemIndicator />
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup> */}

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger />
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent />
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
