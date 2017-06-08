/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service441Service } from './service-441.service';

describe('Service441Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service441Service]
    });
  });

  it('should ...', inject([Service441Service], (service: Service441Service) => {
    expect(service).toBeTruthy();
  }));
});
