/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service609Service } from './service-609.service';

describe('Service609Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service609Service]
    });
  });

  it('should ...', inject([Service609Service], (service: Service609Service) => {
    expect(service).toBeTruthy();
  }));
});
