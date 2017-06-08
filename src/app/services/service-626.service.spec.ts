/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service626Service } from './service-626.service';

describe('Service626Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service626Service]
    });
  });

  it('should ...', inject([Service626Service], (service: Service626Service) => {
    expect(service).toBeTruthy();
  }));
});
