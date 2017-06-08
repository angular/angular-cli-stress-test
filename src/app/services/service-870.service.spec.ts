/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service870Service } from './service-870.service';

describe('Service870Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service870Service]
    });
  });

  it('should ...', inject([Service870Service], (service: Service870Service) => {
    expect(service).toBeTruthy();
  }));
});
