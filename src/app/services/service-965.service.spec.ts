/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service965Service } from './service-965.service';

describe('Service965Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service965Service]
    });
  });

  it('should ...', inject([Service965Service], (service: Service965Service) => {
    expect(service).toBeTruthy();
  }));
});
