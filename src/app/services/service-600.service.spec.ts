/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service600Service } from './service-600.service';

describe('Service600Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service600Service]
    });
  });

  it('should ...', inject([Service600Service], (service: Service600Service) => {
    expect(service).toBeTruthy();
  }));
});
