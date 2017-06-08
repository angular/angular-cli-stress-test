/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service106Service } from './service-106.service';

describe('Service106Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service106Service]
    });
  });

  it('should ...', inject([Service106Service], (service: Service106Service) => {
    expect(service).toBeTruthy();
  }));
});
