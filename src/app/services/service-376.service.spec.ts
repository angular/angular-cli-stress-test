/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service376Service } from './service-376.service';

describe('Service376Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service376Service]
    });
  });

  it('should ...', inject([Service376Service], (service: Service376Service) => {
    expect(service).toBeTruthy();
  }));
});
