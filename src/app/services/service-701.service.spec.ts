/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service701Service } from './service-701.service';

describe('Service701Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service701Service]
    });
  });

  it('should ...', inject([Service701Service], (service: Service701Service) => {
    expect(service).toBeTruthy();
  }));
});
