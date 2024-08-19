import Link from "next/link";
import React, { ReactNode } from "react";

import { SimpleText } from "@/components/ui/typography";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-secondary-light bg-login-light-bg dark:bg-secondary-dark dark:bg-login-dark-bg bg-no-repeat h-screen flex justify-center items-center relative">
      {children}
      <div className="flex max-sm:flex-col gap-4 items-center justify-between text-tertiary-600 text-sm absolute bottom-0 py-6 w-full px-8">
        <SimpleText className="text-tertiary-600">© 2024 All rights reserved</SimpleText>
        <ul className="flex gap-4 flex-wrap max-sm:justify-center">
          <li>
            <Link className="whitespace-nowrap" href="#">
              Get Help
            </Link>
          </li>
          <li>
            <Link className="whitespace-nowrap" href="#">
              Privacy and Policy
            </Link>
          </li>
          <li>
            <Link className="whitespace-nowrap" href="#">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
