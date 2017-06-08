/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service666Service } from './service-666.service';

describe('Service666Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service666Service]
    });
  });

  it('should ...', inject([Service666Service], (service: Service666Service) => {
    expect(service).toBeTruthy();
  }));
});
