/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service704Service } from './service-704.service';

describe('Service704Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service704Service]
    });
  });

  it('should ...', inject([Service704Service], (service: Service704Service) => {
    expect(service).toBeTruthy();
  }));
});
