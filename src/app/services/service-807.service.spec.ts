/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service807Service } from './service-807.service';

describe('Service807Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service807Service]
    });
  });

  it('should ...', inject([Service807Service], (service: Service807Service) => {
    expect(service).toBeTruthy();
  }));
});
