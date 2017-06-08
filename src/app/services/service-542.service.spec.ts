/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service542Service } from './service-542.service';

describe('Service542Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service542Service]
    });
  });

  it('should ...', inject([Service542Service], (service: Service542Service) => {
    expect(service).toBeTruthy();
  }));
});
