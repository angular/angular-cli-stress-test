/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service644Service } from './service-644.service';

describe('Service644Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service644Service]
    });
  });

  it('should ...', inject([Service644Service], (service: Service644Service) => {
    expect(service).toBeTruthy();
  }));
});
