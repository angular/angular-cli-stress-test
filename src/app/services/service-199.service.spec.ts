/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service199Service } from './service-199.service';

describe('Service199Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service199Service]
    });
  });

  it('should ...', inject([Service199Service], (service: Service199Service) => {
    expect(service).toBeTruthy();
  }));
});
