/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service334Service } from './service-334.service';

describe('Service334Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service334Service]
    });
  });

  it('should ...', inject([Service334Service], (service: Service334Service) => {
    expect(service).toBeTruthy();
  }));
});
