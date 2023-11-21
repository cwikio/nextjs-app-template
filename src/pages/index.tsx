import { UserButton } from "@clerk/nextjs";
import Head from "next/head";
import { Button } from "@components/ui/Button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@components/ui/MenuBar";

export default function Home() {

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="flex flex-col gap-3 items-center justify-center w-full bg-red-300 ">
          <Menubar className="bg-gray-800">
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu><UserButton afterSignOutUrl="/" /></MenubarMenu>
          </Menubar>

          <p>this is main page</p>
          <Button>shadcn button</Button>

        </div>
      </main >
    </>
  )
}
