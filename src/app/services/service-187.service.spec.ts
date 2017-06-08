/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service187Service } from './service-187.service';

describe('Service187Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service187Service]
    });
  });

  it('should ...', inject([Service187Service], (service: Service187Service) => {
    expect(service).toBeTruthy();
  }));
});
