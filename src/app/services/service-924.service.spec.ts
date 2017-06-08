/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service924Service } from './service-924.service';

describe('Service924Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service924Service]
    });
  });

  it('should ...', inject([Service924Service], (service: Service924Service) => {
    expect(service).toBeTruthy();
  }));
});
