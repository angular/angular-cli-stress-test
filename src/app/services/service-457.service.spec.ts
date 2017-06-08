/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service457Service } from './service-457.service';

describe('Service457Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service457Service]
    });
  });

  it('should ...', inject([Service457Service], (service: Service457Service) => {
    expect(service).toBeTruthy();
  }));
});
