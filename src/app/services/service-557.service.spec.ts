/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service557Service } from './service-557.service';

describe('Service557Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service557Service]
    });
  });

  it('should ...', inject([Service557Service], (service: Service557Service) => {
    expect(service).toBeTruthy();
  }));
});
