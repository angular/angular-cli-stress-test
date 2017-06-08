/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service566Service } from './service-566.service';

describe('Service566Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service566Service]
    });
  });

  it('should ...', inject([Service566Service], (service: Service566Service) => {
    expect(service).toBeTruthy();
  }));
});
