/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service725Service } from './service-725.service';

describe('Service725Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service725Service]
    });
  });

  it('should ...', inject([Service725Service], (service: Service725Service) => {
    expect(service).toBeTruthy();
  }));
});
