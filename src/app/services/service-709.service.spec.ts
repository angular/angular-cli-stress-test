/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service709Service } from './service-709.service';

describe('Service709Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service709Service]
    });
  });

  it('should ...', inject([Service709Service], (service: Service709Service) => {
    expect(service).toBeTruthy();
  }));
});
