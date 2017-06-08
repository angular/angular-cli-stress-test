/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service429Service } from './service-429.service';

describe('Service429Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service429Service]
    });
  });

  it('should ...', inject([Service429Service], (service: Service429Service) => {
    expect(service).toBeTruthy();
  }));
});
