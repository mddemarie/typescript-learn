import { StringValidator } from "./export";
export const numberRegexp = /^[0-9]+$/;

class ZipCodeExport implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeExport };
export { ZipCodeExport as mainValidator };