/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service48Service } from './service-48.service';

describe('Service48Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service48Service]
    });
  });

  it('should ...', inject([Service48Service], (service: Service48Service) => {
    expect(service).toBeTruthy();
  }));
});
