/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service703Service } from './service-703.service';

describe('Service703Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service703Service]
    });
  });

  it('should ...', inject([Service703Service], (service: Service703Service) => {
    expect(service).toBeTruthy();
  }));
});
