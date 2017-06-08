/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service239Service } from './service-239.service';

describe('Service239Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service239Service]
    });
  });

  it('should ...', inject([Service239Service], (service: Service239Service) => {
    expect(service).toBeTruthy();
  }));
});
