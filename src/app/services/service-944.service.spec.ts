/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service944Service } from './service-944.service';

describe('Service944Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service944Service]
    });
  });

  it('should ...', inject([Service944Service], (service: Service944Service) => {
    expect(service).toBeTruthy();
  }));
});
