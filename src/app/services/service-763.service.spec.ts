/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service763Service } from './service-763.service';

describe('Service763Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service763Service]
    });
  });

  it('should ...', inject([Service763Service], (service: Service763Service) => {
    expect(service).toBeTruthy();
  }));
});
