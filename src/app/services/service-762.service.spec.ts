/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service762Service } from './service-762.service';

describe('Service762Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service762Service]
    });
  });

  it('should ...', inject([Service762Service], (service: Service762Service) => {
    expect(service).toBeTruthy();
  }));
});
