import {
  Modal as MantineModal,
  type ModalProps as MantineModalProps,
} from "@mantine/core";
import classes from "./Modal.module.css";

export interface NuModalProps extends MantineModalProps {}

/**
 * ニューモーフィズムスタイルの Modal コンポーネント
 */
export function NuModal({ classNames, ...props }: NuModalProps) {
  return (
    <MantineModal
      classNames={{
        content: classes.content,
        header: classes.header,
        body: classes.body,
        close: classes.close,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuModal.displayName = "NuModal";
