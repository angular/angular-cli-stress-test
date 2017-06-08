/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service550Service } from './service-550.service';

describe('Service550Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service550Service]
    });
  });

  it('should ...', inject([Service550Service], (service: Service550Service) => {
    expect(service).toBeTruthy();
  }));
});
