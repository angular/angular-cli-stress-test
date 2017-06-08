/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service431Service } from './service-431.service';

describe('Service431Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service431Service]
    });
  });

  it('should ...', inject([Service431Service], (service: Service431Service) => {
    expect(service).toBeTruthy();
  }));
});
