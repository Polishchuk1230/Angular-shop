import { Component, Inject, OnInit, Optional } from '@angular/core';

import { Category } from './category.enum';
import { SharedModule } from '../shared/shared.module';
import { ConstantsService } from '../core/services/constants.service';
import { GeneratorService } from '../core/services/generator.service';
import { genID } from '../core/services/gen-id.generator';
import { GenerateRandomNumber, generatedString } from '../core/services/generator.factory';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-first',
  standalone: true,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  imports: [SharedModule],
  providers: [
    GeneratorService,
    { provide: genID, useFactory: genID },
    { provide: generatedString, useFactory: GenerateRandomNumber(32), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: localStorage },
    { provide: ConstantsService, useValue: { App: "TaskManager", Ver: "1.0", API_URL: "http://..." } }
  ]
})
export class FirstComponent implements OnInit {
  
  category: Category = Category.CATEGORY_ONE

  generatedId1!: any;
  generatedId2!: any;

  constructor(
    @Optional() @Inject(LocalStorageService) private localStorage: Storage,
    @Optional() @Inject(ConstantsService) public constantsService: ConstantsService,
    @Optional() @Inject(generatedString) public generatedString: string,
    @Optional() @Inject(genID) private generateID: Generator
  ) {
  }

  ngOnInit(): void {
    this.generatedId1 = this.generateID?.next().value[0];
    this.generatedId2 = this.generateID?.next().value[0];

    this.localStorage?.setItem("key", "Stored data");
  }

  public getStoredValue(): string {
    return this.localStorage?.getItem("key") ?? "";
  }
}