/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service59Service } from './service-59.service';

describe('Service59Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service59Service]
    });
  });

  it('should ...', inject([Service59Service], (service: Service59Service) => {
    expect(service).toBeTruthy();
  }));
});
