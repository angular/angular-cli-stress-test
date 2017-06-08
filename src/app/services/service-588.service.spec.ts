/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service588Service } from './service-588.service';

describe('Service588Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service588Service]
    });
  });

  it('should ...', inject([Service588Service], (service: Service588Service) => {
    expect(service).toBeTruthy();
  }));
});
