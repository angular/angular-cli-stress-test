/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service234Service } from './service-234.service';

describe('Service234Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service234Service]
    });
  });

  it('should ...', inject([Service234Service], (service: Service234Service) => {
    expect(service).toBeTruthy();
  }));
});
