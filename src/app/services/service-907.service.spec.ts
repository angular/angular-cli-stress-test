/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service907Service } from './service-907.service';

describe('Service907Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service907Service]
    });
  });

  it('should ...', inject([Service907Service], (service: Service907Service) => {
    expect(service).toBeTruthy();
  }));
});
