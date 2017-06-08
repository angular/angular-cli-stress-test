/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service937Service } from './service-937.service';

describe('Service937Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service937Service]
    });
  });

  it('should ...', inject([Service937Service], (service: Service937Service) => {
    expect(service).toBeTruthy();
  }));
});
