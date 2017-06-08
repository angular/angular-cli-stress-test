/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service501Service } from './service-501.service';

describe('Service501Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service501Service]
    });
  });

  it('should ...', inject([Service501Service], (service: Service501Service) => {
    expect(service).toBeTruthy();
  }));
});
