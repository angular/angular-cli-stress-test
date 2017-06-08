/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service194Service } from './service-194.service';

describe('Service194Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service194Service]
    });
  });

  it('should ...', inject([Service194Service], (service: Service194Service) => {
    expect(service).toBeTruthy();
  }));
});
