/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service480Service } from './service-480.service';

describe('Service480Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service480Service]
    });
  });

  it('should ...', inject([Service480Service], (service: Service480Service) => {
    expect(service).toBeTruthy();
  }));
});
