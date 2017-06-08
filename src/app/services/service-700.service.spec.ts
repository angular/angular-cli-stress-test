/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service700Service } from './service-700.service';

describe('Service700Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service700Service]
    });
  });

  it('should ...', inject([Service700Service], (service: Service700Service) => {
    expect(service).toBeTruthy();
  }));
});
