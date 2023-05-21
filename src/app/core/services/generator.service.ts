import { Inject, Injectable, inject } from '@angular/core';
import { genID } from './gen-id.generator';

@Injectable()
export class GeneratorService {

  public getNewID(): number {
    return inject(genID)();
  }

  public generate(n: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
  
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }

}
