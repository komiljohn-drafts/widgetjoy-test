import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";

export default function CustomCSSTabItem() {
  return (
    <div className="overflow-auto min-h-[calc(100dvh-146px)] p-6">
      <SimpleText className="mb-1" weight="font-semibold">
        Custom styles
      </SimpleText>
      <SimpleText color="secondary-700" className="text-sm mb-6 max-w-[248px]" weight="font-medium">
        Add your custom styles and make your widget outstanding.
      </SimpleText>
      <CustomCSSTabItemForm />
    </div>
  );
}

export function CustomCSSTabItemForm() {
  const { theme } = useTheme();
  const [styles, setStyles] = useState<string>();
  const [isPending, setIsPending] = useState(false);

  const handleUpdate = (val?: string) => {
    setStyles(val);
  };

  const handleSave = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toastQueue.add({ title: "Successfully applied" }, { timeout: 1500 });
    }, 1000);
  };

  return (
    <>
      <div className="mb-6 min-h-[300px]">
        <Editor
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          defaultLanguage="css"
          value={styles}
          defaultValue="// write your css code here"
          onChange={handleUpdate} // output code handler
          wrapperProps={{
            className:
              "border border-border-secondary dark:border-secondary-dark rounded-md min-h-[400px] overflow-hidden pt-5",
          }}
          options={{ minimap: { enabled: false } }}
        />
      </div>
      <div>
        <SimpleText className="mb-[18px] text-sm" color="quaternary-500">
          Used classes
        </SimpleText>
        <div className="flex flex-wrap gap-2">
          {classes.map((item) => (
            <Badge
              key={item}
              className="cursor-pointer"
              onClick={() => setStyles((p) => `${p ? `${p}\n` : ""}${item} {\n}`)}
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <Button isLoading={isPending} className="w-full mt-6" onPress={handleSave}>
        Apply changes
      </Button>
    </>
  );
}

const classes = [".card", ".button", ".field", ".icon_close", ".card_header"];
