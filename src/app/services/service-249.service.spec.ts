/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service249Service } from './service-249.service';

describe('Service249Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service249Service]
    });
  });

  it('should ...', inject([Service249Service], (service: Service249Service) => {
    expect(service).toBeTruthy();
  }));
});
