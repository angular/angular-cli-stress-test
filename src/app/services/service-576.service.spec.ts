/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service576Service } from './service-576.service';

describe('Service576Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service576Service]
    });
  });

  it('should ...', inject([Service576Service], (service: Service576Service) => {
    expect(service).toBeTruthy();
  }));
});
