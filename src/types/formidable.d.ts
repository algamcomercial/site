declare module "formidable" {
  import { IncomingMessage } from "http";

  interface Fields {
    [key: string]: string | string[];
  }

  interface File {
    size: number;
    path: string;
    name: string;
    type: string;
    hash?: string;
    lastModifiedDate?: Date;
    originalFilename?: string;
    filepath: string;
  }

  interface Files {
    [key: string]: File | File[];
  }

  interface IncomingFormOptions {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    maxFileSize?: number;
    maxFieldsSize?: number;
    maxFields?: number;
    hash?: string | boolean;
    multiples?: boolean;
  }

  export class IncomingForm {
    constructor(options?: IncomingFormOptions);
    uploadDir: string;
    encoding: string;
    maxFileSize: number;
    maxFieldsSize: number;
    maxFields: number;
    hash: string | boolean;
    multiples: boolean;
    keepExtensions: boolean;

    parse(
      req: IncomingMessage,
      callback?: (err: any, fields: Fields, files: Files) => void
    ): void;
  }
}
