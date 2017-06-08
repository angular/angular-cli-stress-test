/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service953Service } from './service-953.service';

describe('Service953Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service953Service]
    });
  });

  it('should ...', inject([Service953Service], (service: Service953Service) => {
    expect(service).toBeTruthy();
  }));
});
