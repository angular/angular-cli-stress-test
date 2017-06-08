/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service416Service } from './service-416.service';

describe('Service416Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service416Service]
    });
  });

  it('should ...', inject([Service416Service], (service: Service416Service) => {
    expect(service).toBeTruthy();
  }));
});
