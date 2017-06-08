/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service33Service } from './service-33.service';

describe('Service33Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service33Service]
    });
  });

  it('should ...', inject([Service33Service], (service: Service33Service) => {
    expect(service).toBeTruthy();
  }));
});
