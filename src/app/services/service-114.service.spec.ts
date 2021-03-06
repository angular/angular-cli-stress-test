/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service114Service } from './service-114.service';

describe('Service114Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service114Service]
    });
  });

  it('should ...', inject([Service114Service], (service: Service114Service) => {
    expect(service).toBeTruthy();
  }));
});
