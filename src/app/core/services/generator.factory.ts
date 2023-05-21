import { InjectionToken } from "@angular/core";
import { GeneratorService } from "./generator.service";

export const generatedString = new InjectionToken<string>('GeneratedString');

export function GenerateRandomNumber(n: number): (gs: GeneratorService) => string {
    return (gs: GeneratorService): string =>
      gs.generate(n);
}