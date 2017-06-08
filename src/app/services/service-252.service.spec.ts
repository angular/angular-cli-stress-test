/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service252Service } from './service-252.service';

describe('Service252Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service252Service]
    });
  });

  it('should ...', inject([Service252Service], (service: Service252Service) => {
    expect(service).toBeTruthy();
  }));
});
