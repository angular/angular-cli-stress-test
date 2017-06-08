/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service912Service } from './service-912.service';

describe('Service912Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service912Service]
    });
  });

  it('should ...', inject([Service912Service], (service: Service912Service) => {
    expect(service).toBeTruthy();
  }));
});
