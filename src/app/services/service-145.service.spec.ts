/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service145Service } from './service-145.service';

describe('Service145Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service145Service]
    });
  });

  it('should ...', inject([Service145Service], (service: Service145Service) => {
    expect(service).toBeTruthy();
  }));
});
