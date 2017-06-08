/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service975Service } from './service-975.service';

describe('Service975Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service975Service]
    });
  });

  it('should ...', inject([Service975Service], (service: Service975Service) => {
    expect(service).toBeTruthy();
  }));
});
