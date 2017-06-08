/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service6Service } from './service-6.service';

describe('Service6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service6Service]
    });
  });

  it('should ...', inject([Service6Service], (service: Service6Service) => {
    expect(service).toBeTruthy();
  }));
});
