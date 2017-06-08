/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service313Service } from './service-313.service';

describe('Service313Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service313Service]
    });
  });

  it('should ...', inject([Service313Service], (service: Service313Service) => {
    expect(service).toBeTruthy();
  }));
});
