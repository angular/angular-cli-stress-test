/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service82Service } from './service-82.service';

describe('Service82Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service82Service]
    });
  });

  it('should ...', inject([Service82Service], (service: Service82Service) => {
    expect(service).toBeTruthy();
  }));
});
