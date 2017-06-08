/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service118Service } from './service-118.service';

describe('Service118Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service118Service]
    });
  });

  it('should ...', inject([Service118Service], (service: Service118Service) => {
    expect(service).toBeTruthy();
  }));
});
