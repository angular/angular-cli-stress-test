/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service9Service } from './service-9.service';

describe('Service9Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service9Service]
    });
  });

  it('should ...', inject([Service9Service], (service: Service9Service) => {
    expect(service).toBeTruthy();
  }));
});
