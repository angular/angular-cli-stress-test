/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service812Service } from './service-812.service';

describe('Service812Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service812Service]
    });
  });

  it('should ...', inject([Service812Service], (service: Service812Service) => {
    expect(service).toBeTruthy();
  }));
});
