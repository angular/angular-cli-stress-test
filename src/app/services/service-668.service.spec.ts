/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service668Service } from './service-668.service';

describe('Service668Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service668Service]
    });
  });

  it('should ...', inject([Service668Service], (service: Service668Service) => {
    expect(service).toBeTruthy();
  }));
});
