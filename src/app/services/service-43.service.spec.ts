/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service43Service } from './service-43.service';

describe('Service43Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service43Service]
    });
  });

  it('should ...', inject([Service43Service], (service: Service43Service) => {
    expect(service).toBeTruthy();
  }));
});
