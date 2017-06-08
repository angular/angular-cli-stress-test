/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service265Service } from './service-265.service';

describe('Service265Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service265Service]
    });
  });

  it('should ...', inject([Service265Service], (service: Service265Service) => {
    expect(service).toBeTruthy();
  }));
});
