/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service393Service } from './service-393.service';

describe('Service393Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service393Service]
    });
  });

  it('should ...', inject([Service393Service], (service: Service393Service) => {
    expect(service).toBeTruthy();
  }));
});
