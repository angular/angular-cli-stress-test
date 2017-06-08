/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service378Service } from './service-378.service';

describe('Service378Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service378Service]
    });
  });

  it('should ...', inject([Service378Service], (service: Service378Service) => {
    expect(service).toBeTruthy();
  }));
});
