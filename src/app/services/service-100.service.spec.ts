/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service100Service } from './service-100.service';

describe('Service100Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service100Service]
    });
  });

  it('should ...', inject([Service100Service], (service: Service100Service) => {
    expect(service).toBeTruthy();
  }));
});
