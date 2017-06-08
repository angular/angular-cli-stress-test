/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service568Service } from './service-568.service';

describe('Service568Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service568Service]
    });
  });

  it('should ...', inject([Service568Service], (service: Service568Service) => {
    expect(service).toBeTruthy();
  }));
});
