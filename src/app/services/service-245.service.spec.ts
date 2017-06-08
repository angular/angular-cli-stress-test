/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service245Service } from './service-245.service';

describe('Service245Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service245Service]
    });
  });

  it('should ...', inject([Service245Service], (service: Service245Service) => {
    expect(service).toBeTruthy();
  }));
});
