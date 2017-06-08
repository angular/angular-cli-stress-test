/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service671Service } from './service-671.service';

describe('Service671Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service671Service]
    });
  });

  it('should ...', inject([Service671Service], (service: Service671Service) => {
    expect(service).toBeTruthy();
  }));
});
