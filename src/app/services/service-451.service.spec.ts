/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service451Service } from './service-451.service';

describe('Service451Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service451Service]
    });
  });

  it('should ...', inject([Service451Service], (service: Service451Service) => {
    expect(service).toBeTruthy();
  }));
});
