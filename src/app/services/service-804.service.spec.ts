/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service804Service } from './service-804.service';

describe('Service804Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service804Service]
    });
  });

  it('should ...', inject([Service804Service], (service: Service804Service) => {
    expect(service).toBeTruthy();
  }));
});
