/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service475Service } from './service-475.service';

describe('Service475Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service475Service]
    });
  });

  it('should ...', inject([Service475Service], (service: Service475Service) => {
    expect(service).toBeTruthy();
  }));
});
