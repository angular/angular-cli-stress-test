/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service396Service } from './service-396.service';

describe('Service396Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service396Service]
    });
  });

  it('should ...', inject([Service396Service], (service: Service396Service) => {
    expect(service).toBeTruthy();
  }));
});
