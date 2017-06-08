/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service628Service } from './service-628.service';

describe('Service628Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service628Service]
    });
  });

  it('should ...', inject([Service628Service], (service: Service628Service) => {
    expect(service).toBeTruthy();
  }));
});
