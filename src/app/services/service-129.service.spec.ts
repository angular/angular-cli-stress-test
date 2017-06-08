/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service129Service } from './service-129.service';

describe('Service129Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service129Service]
    });
  });

  it('should ...', inject([Service129Service], (service: Service129Service) => {
    expect(service).toBeTruthy();
  }));
});
