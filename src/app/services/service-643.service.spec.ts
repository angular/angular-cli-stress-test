/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service643Service } from './service-643.service';

describe('Service643Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service643Service]
    });
  });

  it('should ...', inject([Service643Service], (service: Service643Service) => {
    expect(service).toBeTruthy();
  }));
});
