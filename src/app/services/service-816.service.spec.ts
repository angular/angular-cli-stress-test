/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service816Service } from './service-816.service';

describe('Service816Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service816Service]
    });
  });

  it('should ...', inject([Service816Service], (service: Service816Service) => {
    expect(service).toBeTruthy();
  }));
});
