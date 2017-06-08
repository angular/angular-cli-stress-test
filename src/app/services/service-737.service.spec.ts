/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service737Service } from './service-737.service';

describe('Service737Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service737Service]
    });
  });

  it('should ...', inject([Service737Service], (service: Service737Service) => {
    expect(service).toBeTruthy();
  }));
});
