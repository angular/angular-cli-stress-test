/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service533Service } from './service-533.service';

describe('Service533Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service533Service]
    });
  });

  it('should ...', inject([Service533Service], (service: Service533Service) => {
    expect(service).toBeTruthy();
  }));
});
