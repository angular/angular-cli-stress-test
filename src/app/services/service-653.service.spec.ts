/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service653Service } from './service-653.service';

describe('Service653Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service653Service]
    });
  });

  it('should ...', inject([Service653Service], (service: Service653Service) => {
    expect(service).toBeTruthy();
  }));
});
