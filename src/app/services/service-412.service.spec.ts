/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service412Service } from './service-412.service';

describe('Service412Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service412Service]
    });
  });

  it('should ...', inject([Service412Service], (service: Service412Service) => {
    expect(service).toBeTruthy();
  }));
});
