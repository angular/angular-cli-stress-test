/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service333Service } from './service-333.service';

describe('Service333Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service333Service]
    });
  });

  it('should ...', inject([Service333Service], (service: Service333Service) => {
    expect(service).toBeTruthy();
  }));
});
