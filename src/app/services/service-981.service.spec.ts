/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service981Service } from './service-981.service';

describe('Service981Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service981Service]
    });
  });

  it('should ...', inject([Service981Service], (service: Service981Service) => {
    expect(service).toBeTruthy();
  }));
});
