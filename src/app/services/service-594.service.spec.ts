/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service594Service } from './service-594.service';

describe('Service594Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service594Service]
    });
  });

  it('should ...', inject([Service594Service], (service: Service594Service) => {
    expect(service).toBeTruthy();
  }));
});
