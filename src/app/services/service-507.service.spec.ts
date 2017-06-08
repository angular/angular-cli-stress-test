/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service507Service } from './service-507.service';

describe('Service507Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service507Service]
    });
  });

  it('should ...', inject([Service507Service], (service: Service507Service) => {
    expect(service).toBeTruthy();
  }));
});
