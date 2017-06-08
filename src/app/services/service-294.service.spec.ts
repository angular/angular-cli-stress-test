/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service294Service } from './service-294.service';

describe('Service294Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service294Service]
    });
  });

  it('should ...', inject([Service294Service], (service: Service294Service) => {
    expect(service).toBeTruthy();
  }));
});
