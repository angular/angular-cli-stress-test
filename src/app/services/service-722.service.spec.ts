/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service722Service } from './service-722.service';

describe('Service722Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service722Service]
    });
  });

  it('should ...', inject([Service722Service], (service: Service722Service) => {
    expect(service).toBeTruthy();
  }));
});
