import {
  Modal as MantineModal,
  type ModalProps as MantineModalProps,
} from "@mantine/core";
import className from "./Modal.module.css";

export interface NuModalProps extends MantineModalProps {}

/**
 * ニューモーフィズムスタイルの Modal コンポーネント
 */
export function NuModal({ classNames, ...props }: NuModalProps) {
  return (
    <MantineModal
      classNames={{
        content: className.content,
        header: className.header,
        body: className.body,
        close: className.close,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuModal.displayName = "NuModal";
