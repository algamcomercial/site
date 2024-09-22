declare module "react-quilljs" {
  import { FC } from "react";
  import Quill from "quill";

  interface QuillConfig {
    modules?: any;
    formats?: any;
    theme?: string;
    placeholder?: string;
    readOnly?: boolean;
  }

  interface UseQuill {
    quill: Quill | null;
    quillRef: React.RefObject<HTMLDivElement>;
    Quill: typeof Quill | null;
  }

  export function useQuill(config?: QuillConfig): UseQuill;
}
