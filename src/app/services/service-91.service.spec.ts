/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service91Service } from './service-91.service';

describe('Service91Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service91Service]
    });
  });

  it('should ...', inject([Service91Service], (service: Service91Service) => {
    expect(service).toBeTruthy();
  }));
});
