/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service437Service } from './service-437.service';

describe('Service437Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service437Service]
    });
  });

  it('should ...', inject([Service437Service], (service: Service437Service) => {
    expect(service).toBeTruthy();
  }));
});
