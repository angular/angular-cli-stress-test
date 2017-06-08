/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service474Service } from './service-474.service';

describe('Service474Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service474Service]
    });
  });

  it('should ...', inject([Service474Service], (service: Service474Service) => {
    expect(service).toBeTruthy();
  }));
});
