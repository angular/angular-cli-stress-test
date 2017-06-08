/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service862Service } from './service-862.service';

describe('Service862Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service862Service]
    });
  });

  it('should ...', inject([Service862Service], (service: Service862Service) => {
    expect(service).toBeTruthy();
  }));
});
