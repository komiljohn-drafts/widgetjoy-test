import { ChevronDown, LogOut, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Header, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import Routes from "@/utils/routes";

import { SimpleText } from "../../typography";

export default function UserMenuDropdown() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" className="flex items-center active-ring rounded-md focus-ring">
        <Image src="/images/avatar.png" width={40} height={40} alt="user" />
        <SimpleText className="ml-3 mr-2 text-button-secondary-fg dark:text-secondary-700" weight="font-semibold">
          User
        </SimpleText>
        <ChevronDown size={20} className="text-tertiary-dark-600" />
      </Button>
      <Popover
        placement="bottom right"
        className="w-[267px] bg-white dark:bg-bg-primary-dark outline-none border border-border-secondary dark:border-border-dark-primary rounded-md px-2 py-[7px] shadow-popup entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
      >
        <Menu className="outline-none">
          <Header>
            <SimpleText color="quaternary-500" className="p-3 text-sm" weight="font-semibold">
              Manage Account
            </SimpleText>
          </Header>
          <MenuItem className="outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark mb-1">
            <Link href={Routes.profile} className="flex items-center gap-2 p-3">
              <User2 size={20} className="text-text-secondary dark:text-white" />
              <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-medium">
                Profile
              </SimpleText>
            </Link>
          </MenuItem>
          <MenuItem className="outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark">
            <Link href={Routes.login} className="flex items-center gap-2 p-3">
              <LogOut size={20} className="text-text-secondary dark:text-white" />
              <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-medium">
                Logout
              </SimpleText>
            </Link>
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
