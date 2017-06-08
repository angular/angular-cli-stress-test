/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service820Service } from './service-820.service';

describe('Service820Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service820Service]
    });
  });

  it('should ...', inject([Service820Service], (service: Service820Service) => {
    expect(service).toBeTruthy();
  }));
});
