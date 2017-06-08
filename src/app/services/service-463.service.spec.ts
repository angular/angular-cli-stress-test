/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service463Service } from './service-463.service';

describe('Service463Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service463Service]
    });
  });

  it('should ...', inject([Service463Service], (service: Service463Service) => {
    expect(service).toBeTruthy();
  }));
});
