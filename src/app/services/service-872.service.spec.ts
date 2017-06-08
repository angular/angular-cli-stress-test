/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service872Service } from './service-872.service';

describe('Service872Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service872Service]
    });
  });

  it('should ...', inject([Service872Service], (service: Service872Service) => {
    expect(service).toBeTruthy();
  }));
});
