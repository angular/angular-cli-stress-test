/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service444Service } from './service-444.service';

describe('Service444Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service444Service]
    });
  });

  it('should ...', inject([Service444Service], (service: Service444Service) => {
    expect(service).toBeTruthy();
  }));
});
