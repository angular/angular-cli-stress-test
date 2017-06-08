/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service777Service } from './service-777.service';

describe('Service777Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service777Service]
    });
  });

  it('should ...', inject([Service777Service], (service: Service777Service) => {
    expect(service).toBeTruthy();
  }));
});
