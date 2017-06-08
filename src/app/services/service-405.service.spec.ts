/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service405Service } from './service-405.service';

describe('Service405Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service405Service]
    });
  });

  it('should ...', inject([Service405Service], (service: Service405Service) => {
    expect(service).toBeTruthy();
  }));
});
