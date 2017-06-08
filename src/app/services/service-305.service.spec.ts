/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service305Service } from './service-305.service';

describe('Service305Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service305Service]
    });
  });

  it('should ...', inject([Service305Service], (service: Service305Service) => {
    expect(service).toBeTruthy();
  }));
});
