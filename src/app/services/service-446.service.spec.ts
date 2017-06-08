/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service446Service } from './service-446.service';

describe('Service446Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service446Service]
    });
  });

  it('should ...', inject([Service446Service], (service: Service446Service) => {
    expect(service).toBeTruthy();
  }));
});
