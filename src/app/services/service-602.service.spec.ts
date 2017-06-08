/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service602Service } from './service-602.service';

describe('Service602Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service602Service]
    });
  });

  it('should ...', inject([Service602Service], (service: Service602Service) => {
    expect(service).toBeTruthy();
  }));
});
