/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service520Service } from './service-520.service';

describe('Service520Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service520Service]
    });
  });

  it('should ...', inject([Service520Service], (service: Service520Service) => {
    expect(service).toBeTruthy();
  }));
});
