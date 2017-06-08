/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service925Service } from './service-925.service';

describe('Service925Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service925Service]
    });
  });

  it('should ...', inject([Service925Service], (service: Service925Service) => {
    expect(service).toBeTruthy();
  }));
});
