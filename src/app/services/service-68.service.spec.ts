/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service68Service } from './service-68.service';

describe('Service68Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service68Service]
    });
  });

  it('should ...', inject([Service68Service], (service: Service68Service) => {
    expect(service).toBeTruthy();
  }));
});
