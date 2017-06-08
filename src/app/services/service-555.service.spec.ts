/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service555Service } from './service-555.service';

describe('Service555Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service555Service]
    });
  });

  it('should ...', inject([Service555Service], (service: Service555Service) => {
    expect(service).toBeTruthy();
  }));
});
