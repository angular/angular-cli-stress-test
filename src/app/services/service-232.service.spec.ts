/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service232Service } from './service-232.service';

describe('Service232Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service232Service]
    });
  });

  it('should ...', inject([Service232Service], (service: Service232Service) => {
    expect(service).toBeTruthy();
  }));
});
