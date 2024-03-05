import { R4 as FHIR } from "@ahryman40k/ts-fhir-types";

export default (extension: FHIR.IExtension[] | undefined, url: string) => {
  if (!extension) {
    return undefined;
  }
  return extension[0].extension?.find((ext: any) => ext.url === url);
};
