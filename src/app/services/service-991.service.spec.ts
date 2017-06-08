/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service991Service } from './service-991.service';

describe('Service991Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service991Service]
    });
  });

  it('should ...', inject([Service991Service], (service: Service991Service) => {
    expect(service).toBeTruthy();
  }));
});
