import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTextDemoSecond() {
  return (
    <div className="w-full flex justify-center text-4xl">
      <p className="mx-auto max-w-lg py-20 text-center">
        <EncryptedText
          text="Welcome to the Matrix, Neo."
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />
      </p>
    </div>
  );
}
