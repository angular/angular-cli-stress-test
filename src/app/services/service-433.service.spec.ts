/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service433Service } from './service-433.service';

describe('Service433Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service433Service]
    });
  });

  it('should ...', inject([Service433Service], (service: Service433Service) => {
    expect(service).toBeTruthy();
  }));
});
