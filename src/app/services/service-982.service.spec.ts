/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service982Service } from './service-982.service';

describe('Service982Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service982Service]
    });
  });

  it('should ...', inject([Service982Service], (service: Service982Service) => {
    expect(service).toBeTruthy();
  }));
});
