/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service346Service } from './service-346.service';

describe('Service346Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service346Service]
    });
  });

  it('should ...', inject([Service346Service], (service: Service346Service) => {
    expect(service).toBeTruthy();
  }));
});
