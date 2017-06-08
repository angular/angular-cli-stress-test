/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service900Service } from './service-900.service';

describe('Service900Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service900Service]
    });
  });

  it('should ...', inject([Service900Service], (service: Service900Service) => {
    expect(service).toBeTruthy();
  }));
});
