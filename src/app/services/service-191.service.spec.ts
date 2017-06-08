/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service191Service } from './service-191.service';

describe('Service191Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service191Service]
    });
  });

  it('should ...', inject([Service191Service], (service: Service191Service) => {
    expect(service).toBeTruthy();
  }));
});
