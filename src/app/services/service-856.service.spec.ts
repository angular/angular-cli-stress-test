/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service856Service } from './service-856.service';

describe('Service856Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service856Service]
    });
  });

  it('should ...', inject([Service856Service], (service: Service856Service) => {
    expect(service).toBeTruthy();
  }));
});
