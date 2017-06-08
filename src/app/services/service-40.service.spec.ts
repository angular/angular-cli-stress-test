/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service40Service } from './service-40.service';

describe('Service40Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service40Service]
    });
  });

  it('should ...', inject([Service40Service], (service: Service40Service) => {
    expect(service).toBeTruthy();
  }));
});
