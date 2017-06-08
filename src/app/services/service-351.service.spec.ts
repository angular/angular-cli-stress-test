/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service351Service } from './service-351.service';

describe('Service351Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service351Service]
    });
  });

  it('should ...', inject([Service351Service], (service: Service351Service) => {
    expect(service).toBeTruthy();
  }));
});
