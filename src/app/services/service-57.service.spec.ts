/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service57Service } from './service-57.service';

describe('Service57Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service57Service]
    });
  });

  it('should ...', inject([Service57Service], (service: Service57Service) => {
    expect(service).toBeTruthy();
  }));
});
