/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service908Service } from './service-908.service';

describe('Service908Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service908Service]
    });
  });

  it('should ...', inject([Service908Service], (service: Service908Service) => {
    expect(service).toBeTruthy();
  }));
});
