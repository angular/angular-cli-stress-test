/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service826Service } from './service-826.service';

describe('Service826Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service826Service]
    });
  });

  it('should ...', inject([Service826Service], (service: Service826Service) => {
    expect(service).toBeTruthy();
  }));
});
