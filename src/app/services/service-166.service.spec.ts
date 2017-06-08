/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service166Service } from './service-166.service';

describe('Service166Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service166Service]
    });
  });

  it('should ...', inject([Service166Service], (service: Service166Service) => {
    expect(service).toBeTruthy();
  }));
});
