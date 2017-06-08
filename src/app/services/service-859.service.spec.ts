/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service859Service } from './service-859.service';

describe('Service859Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service859Service]
    });
  });

  it('should ...', inject([Service859Service], (service: Service859Service) => {
    expect(service).toBeTruthy();
  }));
});
