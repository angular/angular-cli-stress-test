/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service423Service } from './service-423.service';

describe('Service423Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service423Service]
    });
  });

  it('should ...', inject([Service423Service], (service: Service423Service) => {
    expect(service).toBeTruthy();
  }));
});
