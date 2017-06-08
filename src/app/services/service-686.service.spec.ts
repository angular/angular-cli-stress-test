/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service686Service } from './service-686.service';

describe('Service686Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service686Service]
    });
  });

  it('should ...', inject([Service686Service], (service: Service686Service) => {
    expect(service).toBeTruthy();
  }));
});
