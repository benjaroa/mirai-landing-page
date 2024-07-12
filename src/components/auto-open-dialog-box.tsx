import { forwardRef } from "react";
import {
  Dialog,
  DialogPortal,
  DialogContent,
  DialogClose,
} from "./ui/dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

export const AutoOpenDialogBox = forwardRef(
  ({ children, ...props }) => {
    return (
      <DialogPortal>
        <Dialog defaultOpen={true}>
          <DialogContent {...props}>
            {children}
            <DialogClose aria-label="Close">
              <Cross1Icon />
            </DialogClose>
          </DialogContent>
        </Dialog>
      </DialogPortal>
    );
  }
);
