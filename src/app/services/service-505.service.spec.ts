/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service505Service } from './service-505.service';

describe('Service505Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service505Service]
    });
  });

  it('should ...', inject([Service505Service], (service: Service505Service) => {
    expect(service).toBeTruthy();
  }));
});
