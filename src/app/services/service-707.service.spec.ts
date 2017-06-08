/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service707Service } from './service-707.service';

describe('Service707Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service707Service]
    });
  });

  it('should ...', inject([Service707Service], (service: Service707Service) => {
    expect(service).toBeTruthy();
  }));
});
