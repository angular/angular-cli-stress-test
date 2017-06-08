/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service267Service } from './service-267.service';

describe('Service267Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service267Service]
    });
  });

  it('should ...', inject([Service267Service], (service: Service267Service) => {
    expect(service).toBeTruthy();
  }));
});
