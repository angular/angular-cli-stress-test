/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service959Service } from './service-959.service';

describe('Service959Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service959Service]
    });
  });

  it('should ...', inject([Service959Service], (service: Service959Service) => {
    expect(service).toBeTruthy();
  }));
});
