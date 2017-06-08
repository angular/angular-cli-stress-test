/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service556Service } from './service-556.service';

describe('Service556Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service556Service]
    });
  });

  it('should ...', inject([Service556Service], (service: Service556Service) => {
    expect(service).toBeTruthy();
  }));
});
