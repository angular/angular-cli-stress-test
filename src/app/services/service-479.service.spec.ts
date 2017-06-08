/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service479Service } from './service-479.service';

describe('Service479Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service479Service]
    });
  });

  it('should ...', inject([Service479Service], (service: Service479Service) => {
    expect(service).toBeTruthy();
  }));
});
