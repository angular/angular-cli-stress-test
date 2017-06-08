/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service525Service } from './service-525.service';

describe('Service525Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service525Service]
    });
  });

  it('should ...', inject([Service525Service], (service: Service525Service) => {
    expect(service).toBeTruthy();
  }));
});
