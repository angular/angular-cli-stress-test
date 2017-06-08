/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service268Service } from './service-268.service';

describe('Service268Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service268Service]
    });
  });

  it('should ...', inject([Service268Service], (service: Service268Service) => {
    expect(service).toBeTruthy();
  }));
});
