/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service679Service } from './service-679.service';

describe('Service679Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service679Service]
    });
  });

  it('should ...', inject([Service679Service], (service: Service679Service) => {
    expect(service).toBeTruthy();
  }));
});
