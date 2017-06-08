/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service841Service } from './service-841.service';

describe('Service841Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service841Service]
    });
  });

  it('should ...', inject([Service841Service], (service: Service841Service) => {
    expect(service).toBeTruthy();
  }));
});
