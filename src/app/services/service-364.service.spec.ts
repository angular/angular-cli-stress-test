/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service364Service } from './service-364.service';

describe('Service364Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service364Service]
    });
  });

  it('should ...', inject([Service364Service], (service: Service364Service) => {
    expect(service).toBeTruthy();
  }));
});
