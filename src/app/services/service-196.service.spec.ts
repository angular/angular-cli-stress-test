/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service196Service } from './service-196.service';

describe('Service196Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service196Service]
    });
  });

  it('should ...', inject([Service196Service], (service: Service196Service) => {
    expect(service).toBeTruthy();
  }));
});
