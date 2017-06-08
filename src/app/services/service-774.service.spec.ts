/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service774Service } from './service-774.service';

describe('Service774Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service774Service]
    });
  });

  it('should ...', inject([Service774Service], (service: Service774Service) => {
    expect(service).toBeTruthy();
  }));
});
