/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service132Service } from './service-132.service';

describe('Service132Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service132Service]
    });
  });

  it('should ...', inject([Service132Service], (service: Service132Service) => {
    expect(service).toBeTruthy();
  }));
});
