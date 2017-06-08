/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service983Service } from './service-983.service';

describe('Service983Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service983Service]
    });
  });

  it('should ...', inject([Service983Service], (service: Service983Service) => {
    expect(service).toBeTruthy();
  }));
});
