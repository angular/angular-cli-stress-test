/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service216Service } from './service-216.service';

describe('Service216Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service216Service]
    });
  });

  it('should ...', inject([Service216Service], (service: Service216Service) => {
    expect(service).toBeTruthy();
  }));
});
