/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service838Service } from './service-838.service';

describe('Service838Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service838Service]
    });
  });

  it('should ...', inject([Service838Service], (service: Service838Service) => {
    expect(service).toBeTruthy();
  }));
});
