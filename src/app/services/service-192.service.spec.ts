/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service192Service } from './service-192.service';

describe('Service192Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service192Service]
    });
  });

  it('should ...', inject([Service192Service], (service: Service192Service) => {
    expect(service).toBeTruthy();
  }));
});
