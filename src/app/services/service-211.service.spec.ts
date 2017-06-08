/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service211Service } from './service-211.service';

describe('Service211Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service211Service]
    });
  });

  it('should ...', inject([Service211Service], (service: Service211Service) => {
    expect(service).toBeTruthy();
  }));
});
