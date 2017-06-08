/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service861Service } from './service-861.service';

describe('Service861Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service861Service]
    });
  });

  it('should ...', inject([Service861Service], (service: Service861Service) => {
    expect(service).toBeTruthy();
  }));
});
