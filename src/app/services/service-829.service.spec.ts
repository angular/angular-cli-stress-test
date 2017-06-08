/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service829Service } from './service-829.service';

describe('Service829Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service829Service]
    });
  });

  it('should ...', inject([Service829Service], (service: Service829Service) => {
    expect(service).toBeTruthy();
  }));
});
