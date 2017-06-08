/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service850Service } from './service-850.service';

describe('Service850Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service850Service]
    });
  });

  it('should ...', inject([Service850Service], (service: Service850Service) => {
    expect(service).toBeTruthy();
  }));
});
