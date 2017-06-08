/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service115Service } from './service-115.service';

describe('Service115Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service115Service]
    });
  });

  it('should ...', inject([Service115Service], (service: Service115Service) => {
    expect(service).toBeTruthy();
  }));
});
