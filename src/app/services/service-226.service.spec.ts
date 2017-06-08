/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service226Service } from './service-226.service';

describe('Service226Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service226Service]
    });
  });

  it('should ...', inject([Service226Service], (service: Service226Service) => {
    expect(service).toBeTruthy();
  }));
});
