/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service402Service } from './service-402.service';

describe('Service402Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service402Service]
    });
  });

  it('should ...', inject([Service402Service], (service: Service402Service) => {
    expect(service).toBeTruthy();
  }));
});
