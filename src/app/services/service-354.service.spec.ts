/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service354Service } from './service-354.service';

describe('Service354Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service354Service]
    });
  });

  it('should ...', inject([Service354Service], (service: Service354Service) => {
    expect(service).toBeTruthy();
  }));
});
