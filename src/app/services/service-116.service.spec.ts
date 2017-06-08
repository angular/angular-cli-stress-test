/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service116Service } from './service-116.service';

describe('Service116Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service116Service]
    });
  });

  it('should ...', inject([Service116Service], (service: Service116Service) => {
    expect(service).toBeTruthy();
  }));
});
