/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service246Service } from './service-246.service';

describe('Service246Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service246Service]
    });
  });

  it('should ...', inject([Service246Service], (service: Service246Service) => {
    expect(service).toBeTruthy();
  }));
});
