/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service372Service } from './service-372.service';

describe('Service372Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service372Service]
    });
  });

  it('should ...', inject([Service372Service], (service: Service372Service) => {
    expect(service).toBeTruthy();
  }));
});
