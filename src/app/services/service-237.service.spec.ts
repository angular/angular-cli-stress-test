/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service237Service } from './service-237.service';

describe('Service237Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service237Service]
    });
  });

  it('should ...', inject([Service237Service], (service: Service237Service) => {
    expect(service).toBeTruthy();
  }));
});
