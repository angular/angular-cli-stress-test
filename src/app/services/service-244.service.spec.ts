/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service244Service } from './service-244.service';

describe('Service244Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service244Service]
    });
  });

  it('should ...', inject([Service244Service], (service: Service244Service) => {
    expect(service).toBeTruthy();
  }));
});
