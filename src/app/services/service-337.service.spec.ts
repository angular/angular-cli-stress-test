/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service337Service } from './service-337.service';

describe('Service337Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service337Service]
    });
  });

  it('should ...', inject([Service337Service], (service: Service337Service) => {
    expect(service).toBeTruthy();
  }));
});
