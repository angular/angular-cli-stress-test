/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service105Service } from './service-105.service';

describe('Service105Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service105Service]
    });
  });

  it('should ...', inject([Service105Service], (service: Service105Service) => {
    expect(service).toBeTruthy();
  }));
});
