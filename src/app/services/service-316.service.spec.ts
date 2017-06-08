/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service316Service } from './service-316.service';

describe('Service316Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service316Service]
    });
  });

  it('should ...', inject([Service316Service], (service: Service316Service) => {
    expect(service).toBeTruthy();
  }));
});
