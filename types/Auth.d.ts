export type RegisterResponseType =
    | {
          message?: string;
          errors?: { msg: string; param: string; location: string }[];
      }
    | ErrorType;
