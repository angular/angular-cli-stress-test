/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service811Service } from './service-811.service';

describe('Service811Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service811Service]
    });
  });

  it('should ...', inject([Service811Service], (service: Service811Service) => {
    expect(service).toBeTruthy();
  }));
});
