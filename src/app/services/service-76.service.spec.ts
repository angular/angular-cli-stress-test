/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service76Service } from './service-76.service';

describe('Service76Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service76Service]
    });
  });

  it('should ...', inject([Service76Service], (service: Service76Service) => {
    expect(service).toBeTruthy();
  }));
});
