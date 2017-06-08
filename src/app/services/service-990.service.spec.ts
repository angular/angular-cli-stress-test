/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service990Service } from './service-990.service';

describe('Service990Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service990Service]
    });
  });

  it('should ...', inject([Service990Service], (service: Service990Service) => {
    expect(service).toBeTruthy();
  }));
});
