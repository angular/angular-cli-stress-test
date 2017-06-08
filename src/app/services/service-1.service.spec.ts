/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service1Service } from './service-1.service';

describe('Service1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service1Service]
    });
  });

  it('should ...', inject([Service1Service], (service: Service1Service) => {
    expect(service).toBeTruthy();
  }));
});
