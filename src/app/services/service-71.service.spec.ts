/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service71Service } from './service-71.service';

describe('Service71Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service71Service]
    });
  });

  it('should ...', inject([Service71Service], (service: Service71Service) => {
    expect(service).toBeTruthy();
  }));
});
