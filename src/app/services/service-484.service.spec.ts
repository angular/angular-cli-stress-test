/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service484Service } from './service-484.service';

describe('Service484Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service484Service]
    });
  });

  it('should ...', inject([Service484Service], (service: Service484Service) => {
    expect(service).toBeTruthy();
  }));
});
