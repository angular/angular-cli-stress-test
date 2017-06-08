/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service964Service } from './service-964.service';

describe('Service964Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service964Service]
    });
  });

  it('should ...', inject([Service964Service], (service: Service964Service) => {
    expect(service).toBeTruthy();
  }));
});
